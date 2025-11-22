import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const api_key = "VF.DM.691ccd59d6d91caad66442a0.vOnPQyuTpWM8JRRN";
const versionID = "production";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [input, setInput] = useState("");
  const [userID, setUserID] = useState("user_" + Date.now());

  const interact = async (request) => {
    try {
      const response = await axios.post(
        `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
        { request },
        {
          headers: {
            Authorization: api_key,
            versionID: versionID,
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );

      const traces = response.data;
      let newMessages = [...messages];
      let newButtons = [];

      for (let trace of traces) {
        if (trace.type === "text") {
          newMessages.push({ type: "bot", text: trace.payload.message });
        } else if (trace.type === "choice") {
          newButtons = trace.payload.buttons;
        }
      }

      setMessages(newMessages);
      setButtons(newButtons);

    } catch (err) {
      console.error("Error:", err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: "user", text: input }]);
    await interact({ type: "text", payload: input });
    setInput("");
  };

  const sendButton = async (btn) => {
    setMessages([...messages, { type: "user", text: btn.name }]);
    await interact(btn.request);
    setButtons([]);
  };

  return (
    <div className="p-6 space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>AI Assistant</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="h-96 overflow-y-auto space-y-3 p-4 bg-muted rounded-lg">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-xs ${
                  m.type === "user"
                    ? "bg-primary text-white ml-auto"
                    : "bg-white border"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Buttons from Voiceflow */}
          {buttons.length > 0 && (
            <div className="flex gap-3 flex-wrap">
              {buttons.map((btn, i) => (
                <Button key={i} onClick={() => sendButton(btn)}>
                  {btn.name}
                </Button>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <Input
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
