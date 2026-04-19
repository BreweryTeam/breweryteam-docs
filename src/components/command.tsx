/**
 * Who can use the command?
 */
export enum CommandUsability {
    ANY = "Any",
    PLAYER_ONLY = "Player Only",
    CONSOLE_ONLY = "Console Only",
}

export type CommandProperties = {
    name: string;
    syntax: string;
    permission: string;
    usability: CommandUsability; // this should probably have a better name
};

export function Command(properties: CommandProperties) {
    return (
        <div className="bg-fd-card text-fd-card-foreground border rounded-xl my-4">
            <div className="flex justify-between items-center border-b px-3 py-3">
                <span className="text-lg font-mono font-bold">{properties.name}</span>
                <span className="text-sm font-semibold bg-cyan-500/25 border text-fd-accent-foreground px-2 py-1 rounded-full text-center">
                    {properties.usability}
                </span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 px-3 py-3">
                <div className="flex flex-col">
                    <strong>Syntax:</strong>
                    <span className="font-mono">{properties.syntax}</span>
                </div>
                <div className="flex flex-col">
                    <strong>Permission:</strong>
                    <span className="font-mono">{properties.permission}</span>
                </div>
            </div>
        </div>
    );
}
