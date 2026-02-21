export default async function handler(
  req: { method: string; body: Record<string, string> },
  res: {
    status: (code: number) => {
      json: (body: unknown) => void;
      end: () => void;
    };
  },
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, phone, date, hours, details } = req.body;

  const text = [
    "📅 *New Booking Request*",
    `👤 Name: ${name}`,
    `📧 Email: ${email}`,
    `📞 Phone: ${phone}`,
    `🗓 Date: ${date}`,
    hours ? `⏱ Hours: ${hours}` : "",
    details ? `📝 Details: ${details}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const tgRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    },
  );

  if (!tgRes.ok) {
    return res.status(502).json({ error: "Telegram API error" });
  }

  return res.status(200).json({ ok: true });
}
