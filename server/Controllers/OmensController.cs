using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OmensController : ControllerBase
{
    private static readonly string[] Omens = new[]
    {
        "💀 The terminal whispers your name...",
        "🕷️ A web of code tightens around your project.",
        "🎃 The pumpkin glows with hidden bugs.",
        "👻 Your console flickers — but you didn't press run.",
        "🌙 The moon reveals a memory leak in your shadow.",
        "⚡ Electric spirits dance through your circuits.",
        "🔮 The crystal ball shows... undefined is not a function.",
        "🦇 Bats carry your API requests into the void.",
        "💜 Neon ghosts haunt your localhost.",
        "🧛 A vampire drains your battery at midnight.",
        "🕸️ Cobwebs form in your unused functions.",
        "👁️ Something watches from the stack trace.",
        "🌌 The void returns null, but something else returns...",
        "⚰️ Your code sleeps, but never rests.",
        "🔥 Phoenix errors rise from the ashes.",
        "🌀 A portal opens in your recursive function.",
        "💎 Cursed gems hide in your dependencies.",
        "🎭 The mask of production hides staging horrors.",
        "⛓️ Chains of promises bind your async calls.",
        "🗝️ The key to the crypt is in your .env file."
    };

    [HttpGet("random")]
    public IActionResult GetRandomOmen()
    {
        var omen = Omens[Random.Shared.Next(Omens.Length)];
        return Ok(new { omen, timestamp = DateTime.UtcNow });
    }

    [HttpGet("all")]
    public IActionResult GetAllOmens()
    {
        return Ok(new { omens = Omens, count = Omens.Length });
    }
}

