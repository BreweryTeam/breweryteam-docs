import { Fragment, PropsWithChildren } from "react";

export enum CommandExecutor {
    ANY = "Any",
    PLAYER_ONLY = "Player Only",
    CONSOLE_ONLY = "Console Only",
}

export type Command = {
    permission: string;
    syntax: string;
    executor?: CommandExecutor;
    headerLink?: string;
};

export type CommandProperties = {
    name: string;
    /**
     * This can either be a single string - in that case it only has one syntax, so we don't a docId - or an array of subcommands, each with their own syntax and docId.
     */
    subcommands: Command | Command[];
    /**
     * The default executor for the command
     */
    executor?: CommandExecutor;
};

function CommandCard({ title, children, noGap }: { title: string; noGap?: boolean } & PropsWithChildren) {
    return (
        <div className={`min-w-0 flex flex-col ${noGap ? "gap-0" : "gap-1"}`}>
            <div className="text-sm font-bold">{title}</div>
            <div className="min-w-0 wrap-break-word">{children}</div>
        </div>
    );
}

export function Command(properties: CommandProperties) {
    const normalizedSubcommands = Array.isArray(properties.subcommands)
        ? properties.subcommands
        : [properties.subcommands];

    const noSubcommandsWithExecutor = normalizedSubcommands.every((subcommand) => !subcommand.executor);

    return (
        <div className="bg-fd-card text-fd-card-foreground border rounded-xl my-4">
            <div className="flex justify-between items-center border-b px-3 py-3">
                <span className="text-lg font-mono font-bold">{properties.name}</span>
                {properties.executor && (
                    <span className="text-sm font-semibold bg-cyan-500/25 border text-fd-accent-foreground px-2 py-1 rounded-full text-center">
                        {properties.executor}
                    </span>
                )}
            </div>

            <div
                className={`grid gap-x-6 gap-y-4 px-3 py-3 ${
                    noSubcommandsWithExecutor
                        ? "grid-cols-[minmax(0,4fr)_minmax(0,2fr)]"
                        : "grid-cols-[minmax(0,4fr)_minmax(0,2fr)_minmax(0,1fr)]"
                }`}
            >
                {normalizedSubcommands.map((subcommand, index) => (
                    <a href={subcommand.headerLink} className="contents" key={index}>
                        <CommandCard title="Syntax">
                            <div className="min-w-0 font-mono text-sm whitespace-pre-wrap wrap-break-word">{subcommand.syntax}</div>
                        </CommandCard>
                        <CommandCard title="Permission">
                            <div className="min-w-0 font-mono text-sm wrap-break-word">{subcommand.permission}</div>
                        </CommandCard>
                        {subcommand.executor && (
                            <CommandCard noGap title="Executor">
                                <span className="inline-block text-xs font-semibold bg-cyan-500/25 border text-fd-accent-foreground px-2 py-1 rounded-full text-center">
                                    {subcommand.executor}
                                </span>
                            </CommandCard>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
}
