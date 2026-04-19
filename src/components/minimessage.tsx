import { MiniMessage } from "minimessage-js";

export function MiniMessageRenderer({ text }: { text: string }) {
    const mini = MiniMessage.miniMessage();
    const component = mini.deserialize(text);

    const rawHtml = mini.toHTML(component);

    return <div className="font-mono" dangerouslySetInnerHTML={{ __html: rawHtml }}></div>;
}
