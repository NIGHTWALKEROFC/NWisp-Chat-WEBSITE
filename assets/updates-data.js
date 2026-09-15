/**
 * NWisp changelog data
 * ---------------------------------------------------------------
 * Add a new object to the TOP of this array for every future update.
 * updates.html renders the list from this file. update.html renders
 * one entry's full detail based on the `id` in the URL (?id=...).
 *
 * Field guide:
 *  id        – unique slug, used in the URL: update.html?id=this-value
 *  date      – display string, e.g. "September 2026"
 *  tag       – "major" | "added" | "changed"  (controls the pill color)
 *  tagLabel  – text shown inside the pill
 *  title     – headline for the entry
 *  intro     – one or two sentences, shown on both list + detail page
 *  points    – short bullet points shown on the LIST page only.
 *              each point: { type: "added" | "changed" | "removed", text: "..." }
 *  detail    – full write-up shown on the DETAIL page only.
 *              grouped into sections: added / changed / removed.
 *              each item: { title: "...", body: "..." }
 */
window.NWISP_UPDATES = [
  {
    id: "search-privacy-tools-2026-09b",
    date: "September 15, 2026",
    tag: "major",
    tagLabel: "Major update",
    title: "Search, a panic PIN, self-destructing media, and a lot more privacy control",
    intro:
      "This update is almost entirely about finding things faster and controlling what other people can ever see — a real panic PIN, view-once photos and videos, link-safety warnings, and search across every chat at once.",
    points: [
      { type: "added", text: "Global search — find any chat, group, or message across the whole app in one place" },
      { type: "added", text: "Starred messages — a private bookmark list across every conversation, visible only to you" },
      { type: "added", text: "Chat folders — organize your chat list into your own custom groups" },
      { type: "added", text: "View-once photos and videos — open once, then gone, with no save option" },
      { type: "added", text: "Link safety warnings — on-device heuristic check before you open a suspicious link" },
      { type: "added", text: "Mute by keyword — globally or per chat, without muting the whole conversation" },
      { type: "added", text: "Duress PIN — a second, separate PIN that opens a harmless decoy screen instead of your real chats" },
      { type: "added", text: "Biometric unlock — Face ID / fingerprint as a shortcut for your app-lock PIN" },
      { type: "added", text: "\"Clear on exit\" mode — a chat wipes its local copy on this device the moment you leave it" },
      { type: "added", text: "Inactivity auto-wipe — automatically clear a chat's local copy after it's gone untouched, on or off globally and per chat" },
      { type: "added", text: "Per-chat wallpapers — a different look for individual conversations, separate from your app-wide theme" },
      { type: "added", text: "Per-chat media browser — every photo, video, voice message, and link in a chat, in one tabbed view" },
      { type: "added", text: "Report a group — flag a group itself, not just one member of it" },
      { type: "changed", text: "Reporting is now available for both individual contacts and whole groups" },
    ],
    detail: {
      added: [
        {
          title: "Global search",
          body: "Search across every chat and group at once — matches conversation and group names, and the actual text of messages, so you can jump straight to a result instead of hunting through your chat list. Nothing here is server-side; it searches what's already decrypted and stored on your device."
        },
        {
          title: "Starred messages",
          body: "Star any message in any chat or group to save it to a personal list you can revisit any time. Unlike pinning, starring is completely private to you — it's never visible to anyone else in the conversation, and never synced anywhere."
        },
        {
          title: "Chat folders",
          body: "Create your own named folders and add any chat to as many of them as you want — a chat isn't locked into one folder, folders are just custom filters over your existing chat list. Purely local to your device, like muted or archived chats already were."
        },
        {
          title: "View-once media",
          body: "Send a photo or video that can only be opened once. It fills the screen on its own, with no gallery to swipe through and no save-to-device option — closing it deletes it for good. Screenshot and screen-recording protection is active the entire time it's open."
        },
        {
          title: "Link safety warnings",
          body: "Before you open a link someone sends you, NWisp Chat checks it for common red flags — raw IP addresses instead of a real domain, a login-sounding subdomain attached to an unrelated site, lookalike characters, and known link-shortener domains that hide where they actually lead. This runs entirely on your device — no link is ever sent anywhere to be checked. It's a heuristic warning to make you pause, not a guarantee every bad link gets caught."
        },
        {
          title: "Mute by keyword",
          body: "Mute notifications that contain specific words, either across every chat or just one conversation. Because the server never sees your message text, this only works once a message actually reaches and decrypts on your device — a notification that arrives while the app is fully closed still shows normally, the same real limit that already applies elsewhere in NWisp Chat's zero-knowledge design."
        },
        {
          title: "Duress PIN",
          body: "Set a second PIN, completely separate from your real one, on the same lock screen. Type it under pressure and you land on a decoy screen that looks like a normal, empty, freshly-installed copy of the app — no real chats, no way back to your actual account visible on screen. To get back to your real chats, close and reopen the app and enter your real PIN. Setting one up requires your real PIN first, and the two can never be the same."
        },
        {
          title: "Biometric unlock",
          body: "If your device has Face ID or a fingerprint sensor set up, you can use it as a faster way past your app lock. It's purely a convenience layer — your real PIN is still what's actually stored and verified, biometrics just ask the phone \"is this the owner?\" and accept a yes the same way a correct PIN would be accepted."
        },
        {
          title: "\"Clear on exit\" mode",
          body: "Turn this on for a chat and your device wipes its local copy of that conversation the moment you close it — every time. Either person in a 1:1 chat can turn it on or off. It only affects your own device; it never touches the relay and never deletes anything on the other person's phone."
        },
        {
          title: "Inactivity auto-wipe",
          body: "Automatically clear a chat's local copy after it's gone untouched for a set number of months. There's a global default you can turn on in Settings, and any individual chat can override it — opting a specific chat in even if the default is off, or opting it out even if the default is on. Entirely local to your device, same as clear-on-exit."
        },
        {
          title: "Per-chat wallpapers",
          body: "Pick a background for one specific conversation, separate from your overall app theme. It's a personal, on-device choice — the other person in a 1:1 chat never sees or is affected by it."
        },
        {
          title: "Per-chat media browser",
          body: "Open a chat or group's info screen to see every photo and video, every voice message, and every link ever shared in that conversation, sorted into tabs. View-once media doesn't appear here, since it's designed to disappear after one viewing. Opening a link from this browser gets the same safety warning as tapping it directly in the chat."
        },
        {
          title: "Report a group",
          body: "Alongside reporting an individual contact, you can now report a group itself — for cases where it's the group's name, description, or shared content that breaks a rule, not one specific member."
        }
      ],
      changed: [
        {
          title: "Reporting",
          body: "The existing report-and-appeal system now covers groups as well as individual people, using the same rule categories and review process."
        }
      ],
      removed: []
    }
  },
  {
    id: "signal-protocol-groups-2026-09",
    date: "September 9, 2026",
    tag: "major",
    tagLabel: "Major update",
    title: "Group chats, real forward-secret encryption, and a lot more control",
    intro:
      "This is the biggest change since NWisp Chat started. The encryption underneath every chat has been rebuilt on the Signal Protocol, group chats are here, and a full set of account-security and trust-and-safety tools shipped alongside them.",
    points: [
      { type: "added", text: "Group chats — create a group, add contacts directly or invite people who have to accept, admins, rename/description/photo" },
      { type: "added", text: "Voice messages — record and send in both 1:1 and group chats" },
      { type: "added", text: "Safety number verification — confirm you're really talking to who you think you are" },
      { type: "added", text: "QR code contact adding" },
      { type: "added", text: "Screenshot & screen-recording protection, on by default" },
      { type: "added", text: "Hidden chats with a shared or per-chat code, plus an optional PIN" },
      { type: "added", text: "\"Pause this chat\" — a mutual, timed freeze either side can start" },
      { type: "added", text: "One active device at a time, with a sign-in activity log and optional approval for new sign-ins" },
      { type: "added", text: "Deactivate, export, or permanently delete your account from inside the app" },
      { type: "added", text: "Reporting, appeals, and a Community Guidelines page" },
      { type: "added", text: "16 accent colors, 8 wallpapers plus your own photo, and custom app branding" },
      { type: "changed", text: "Chat encryption rebuilt on the Signal Protocol (X3DH + Double Ratchet) — every message now has forward secrecy" },
      { type: "changed", text: "Pinned messages redesigned into a single cyclable banner, most recent first, capped at 3" },
      { type: "changed", text: "Reactions expanded to 12 emoji; tap your own reaction again to remove it" },
      { type: "removed", text: "Old static-key encryption scheme, fully replaced by the Signal Protocol" },
    ],
    detail: {
      added: [
        {
          title: "Group chats",
          body: "You can now create a group, add existing contacts to it directly, or invite people who have to accept before they're in. Groups have admins, a name, an optional description and photo, and a setting to restrict sending to admins only. Every message in a group is still end-to-end encrypted to each member individually."
        },
        {
          title: "Voice messages",
          body: "Record and send voice messages in any 1:1 or group chat, with waveform playback and a 5-minute cap per message. They're encrypted the same way as everything else."
        },
        {
          title: "Safety number verification",
          body: "Each conversation now has a safety number you can compare with the other person through a separate channel, so you can confirm no one is intercepting your messages — the same idea used by other Signal Protocol apps."
        },
        {
          title: "QR code contact adding",
          body: "Add someone by scanning their code instead of typing a username, useful when you're together in person."
        },
        {
          title: "Screenshot & screen-recording protection",
          body: "The app now blocks screenshots and screen recordings inside chats by default. There's nothing to turn on — it's always active."
        },
        {
          title: "Hidden chats",
          body: "Move a conversation out of your main chat list behind a shared \"hide\" code, or set a custom code for that one chat specifically. You can also add a second PIN on top for extra protection, with a password-verified way to reset if you forget it."
        },
        {
          title: "\"Pause this chat\"",
          body: "Either side of a conversation can start a timed freeze that stops both people from sending until it lifts — a calmer alternative to blocking someone outright."
        },
        {
          title: "Single active device + sign-in activity",
          body: "Your account can only be signed in on one device at a time, and you can see a log of recent sign-in activity from your security settings."
        },
        {
          title: "Approval for new sign-ins",
          body: "Turn on an optional setting so that signing in on a new device requires approving it from your existing one first."
        },
        {
          title: "Account controls",
          body: "Deactivate your account temporarily, export a copy of your data, or permanently delete your account — all from inside the app, no email required."
        },
        {
          title: "Reporting & appeals",
          body: "Report a specific rule violation against a contact, and appeal a suspension if it happens to you. A new Community Guidelines page explains the actual rules being enforced."
        },
        {
          title: "Personalization",
          body: "Pick from 16 accent colors, 8 built-in wallpapers or upload your own photo, and set a custom logo — the app no longer has to look like the default NWisp Chat branding if you don't want it to."
        },
        {
          title: "In-app media viewer",
          body: "Photos and videos shared in chat now open in a proper swipeable, pinch-to-zoom viewer, with the option to save a copy to your device."
        },
        {
          title: "Help Centre & Terms",
          body: "A searchable in-app Help Centre with FAQ sits alongside the Privacy Policy, plus a new Terms & Conditions screen, both reachable from settings and from the sign-up flow."
        }
      ],
      changed: [
        {
          title: "Encryption rebuilt on the Signal Protocol",
          body: "The original scheme used a single static key pair per person. Every chat now runs full X3DH key agreement plus the Double Ratchet, meaning encryption keys keep changing message to message — so a single leaked key can't be used to read messages sent before or after it (forward secrecy)."
        },
        {
          title: "Pinned messages",
          body: "Replaced the old one-pin-per-bubble approach with a single banner at the top of the chat that cycles through up to 3 pinned messages, most recent first — closer to how WhatsApp or Telegram handle it."
        },
        {
          title: "Reactions",
          body: "Expanded from a small fixed set up to 12 emoji, and tapping your own existing reaction now removes it instead of stacking another one."
        },
        {
          title: "Blocking",
          body: "Blocking someone is now enforced at the message-delivery layer rather than only hidden in the interface, so a blocked contact's messages don't reach you at all."
        },
        {
          title: "Usernames",
          body: "New sign-ups now have their username forced to lowercase automatically, matching how most apps with @handles behave."
        }
      ],
      removed: [
        {
          title: "Old static-key encryption",
          body: "The original single-key-pair encryption scheme has been fully replaced by the Signal Protocol implementation above. No conversations still use the old scheme."
        }
      ]
    }
  }
];
