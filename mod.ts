export async function LockScreen() {
    if(Deno.build.os === "windows") {
        await Deno.run({
            cmd: ["rundll32.exe", "user32.dll,LockWorkStation"]
        }).status();
    } else if (Deno.build.os === "linux") {
        await Deno.run({
            cmd: ["loginctl", "lock-session"]
        }).status();
    } else if (Deno.build.os === "darwin") {
        await Deno.run({
            cmd: ["pmset", "displaysleepnow"]
        }).status();
    }
}