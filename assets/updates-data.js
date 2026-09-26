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
    id: "communities-vault-2fa-2026-09-26",
    date: "September 26, 2026",
    tag: "major",
    tagLabel: "Major update",
    title: "Communities, a Media Vault, real 2FA, and a lot of quiet security work",
    intro:
      "This is the biggest update yet. Public Communities exist now, there's a separate encrypted vault for private photos, real authenticator-app two-factor authentication shipped, and a long list of smaller privacy and anti-abuse protections came in underneath all of it.",
    points: [
      { type: "added", text: "Communities — public, joinable groups with categories and optional location, found from their own home-screen tab" },
      { type: "added", text: "Announcements — admin-only-post groups, kept in their own tab so they don't clutter your chats" },
      { type: "added", text: "Media Vault — a separate encrypted space for photos and videos, locked with its own PIN or biometric-only mode" },
      { type: "added", text: "Intruder Photo — silently photographs repeated wrong app-lock attempts into the vault" },
      { type: "added", text: "Two-factor authentication — real authenticator-app (TOTP) support with one-time backup codes" },
      { type: "added", text: "Password breach checking — warns if a password you're choosing has shown up in known data breaches" },
      { type: "added", text: "CAPTCHA on sign-up and password reset, to block scripted abuse" },
      { type: "added", text: "Privacy Checkup — a guided 4-step walkthrough of your privacy settings" },
      { type: "added", text: "Privacy Lockdown — one tap to turn on every privacy-maximizing setting at once" },
      { type: "added", text: "Traffic camouflage — optional message padding and decoy traffic to obscure timing and size patterns" },
      { type: "added", text: "Private keyboard mode — asks your keyboard not to learn from or suggest based on what you type here" },
      { type: "added", text: "Secure clipboard — auto-clears a copied password or code after about 45 seconds" },
      { type: "added", text: "Scheduled messages — write now, send later, with an optional silent send" },
      { type: "added", text: "Note to Self — a private notepad that works like chatting with yourself" },
      { type: "added", text: "Shake to lock — three sharp shakes locks the app instantly" },
      { type: "added", text: "In-chat message search, alongside the existing global search" },
      { type: "added", text: "Per-chat accent color, separate from per-chat wallpaper" },
      { type: "added", text: "Multiple devices — opt-in support for up to 5 signed-in devices, single-device stays the default" },
      { type: "changed", text: "Story privacy now uses one shared picker for both your default audience and a per-post override" },
      { type: "changed", text: "Changing your email now asks you to confirm it twice, catching typos before it's sent" },
      { type: "changed", text: "Privacy Policy, Terms & Conditions, and Community Guidelines substantially expanded to cover everything above" },
    ],
    detail: {
      added: [
        {
          title: "Communities",
          body: "A public, joinable group anyone can find from the Community tab — different from a regular group in that its name, description, topic, and optional location are visible to every NWisp Chat user, not just members. Creating one is free and open, with ready-made categories to pick from and full country/state/district location data for India (free-text elsewhere). Its actual messages are end-to-end encrypted exactly like a group's."
        },
        {
          title: "Announcements",
          body: "Groups where only admins can post now live in their own home-screen tab, kept separate from your regular chats. Everyone can still read and react, and can reply privately to whoever posted — sending into the group itself is just limited to admins. The tab can be switched off in Settings if you'd rather these appeared in your normal chat list."
        },
        {
          title: "Media Vault",
          body: "A private, encrypted space for photos and videos that's completely separate from your regular chats and from app lock. You can open it with its own PIN — resettable with your account password — or switch to biometric-only mode, which deletes the PIN entirely and has no reset path at all: knowing your account password gets someone nothing if you've chosen that mode."
        },
        {
          title: "Intruder Photo",
          body: "Off by default, turned on in Settings > Security. Once on, the front camera quietly takes a photo after repeated wrong app-lock PIN attempts and saves it straight into the Media Vault, labeled with the time. The camera permission is only ever requested when you turn the feature on — never at the lock screen itself, where a permission pop-up would tip off whoever's trying to get in."
        },
        {
          title: "Two-factor authentication (TOTP)",
          body: "Real, standard authenticator-app based two-factor authentication — scan a QR code with an app like Google Authenticator or Aegis, confirm a code, and you're given 10 one-time backup codes shown exactly once. This is a meaningfully stronger design than a memorized PIN: the codes are generated by an app you hold, not something you have to remember, and losing your phone doesn't lock you out as long as you saved the backup codes."
        },
        {
          title: "Password breach checking",
          body: "When you're choosing a password — signing up, resetting, or changing one — it's checked against the Have I Been Pwned database of known breached passwords. Only the first 5 characters of your password's hash are ever sent, using the k-anonymity method HaveIBeenPwned specifically designed for this — your actual password never leaves your device. It's a warning, not a hard block: a network hiccup never stops you from signing up."
        },
        {
          title: "CAPTCHA on sign-up and password reset",
          body: "A real challenge (Cloudflare Turnstile) now has to be solved before the app will send a sign-up code or a password-reset code, so scripted mass-account-creation or mass-reset-request abuse can't just hammer the server automatically."
        },
        {
          title: "Privacy Checkup",
          body: "A guided, 4-step walkthrough — lock your app, control what others see, keep notifications quiet, protect this phone and your account — for anyone who wants a clear path through the privacy settings instead of hunting for them individually."
        },
        {
          title: "Privacy Lockdown",
          body: "For when you want maximum privacy right now: one screen shows you exactly what will be switched on (with a plain-language note on what each change actually does, like \"you won't see other people's read receipts either\"), and only applies anything once you confirm."
        },
        {
          title: "Traffic camouflage",
          body: "Off by default, both globally and per chat. Even though message content is always encrypted, someone who could see the relay server's activity (never its content) could still learn something from the pattern alone — roughly when you're active, how often you message someone, how long each message tends to be. This feature blurs both signals: text messages are padded to a fixed size bucket before encryption, and real, fully encrypted decoy messages get sent at random intervals to camouflage-enabled chats. Only the recipient's device can tell a decoy from a real message; it's silently discarded there."
        },
        {
          title: "Private keyboard mode",
          body: "Off by default, in Settings > Privacy. When on, every message and search box asks your phone's keyboard app not to learn from what you type there, not to show word suggestions, and not to auto-correct. It's a request, not something that can be forced — most mainstream keyboards honor it, but one that doesn't can't be made to."
        },
        {
          title: "Secure clipboard",
          body: "When you copy a generated password or an OTP code inside the app, it's automatically cleared from your clipboard again about 45 seconds later — but only if you haven't copied something else in the meantime, so it never wipes out something unrelated."
        },
        {
          title: "Scheduled messages",
          body: "Write a message now and have it send itself later, with the option to send it silently so it doesn't trigger a notification on the recipient's end. Manage everything waiting to go out from a single list, per chat or across all of them."
        },
        {
          title: "Note to Self",
          body: "A private notepad that looks and behaves exactly like a chat, except the only person in it is you. It lives in the exact same encrypted on-device storage as your other chats — nothing about it is ever sent to any server — so it disappears along with everything else if a different account signs in on your device or your local data gets wiped."
        },
        {
          title: "Shake to lock",
          body: "Turn it on in Settings > Security, and three sharp, deliberate shakes of your phone lock the app instantly — a fast option for the moment someone walks in unexpectedly. A single bump or normal handling doesn't trigger it."
        },
        {
          title: "In-chat message search",
          body: "Search within one specific conversation, alongside the global search across everything that already existed. Since messages are already stored decrypted on your device, this is instant and needs no network round trip."
        },
        {
          title: "Per-chat accent color",
          body: "Recolor one chat's sent bubbles, send button, and links — separate from that chat's wallpaper, and like every other display preference, it's saved only on your device and never seen by the other person."
        },
        {
          title: "Multiple devices",
          body: "Off by default — a single active device stays the standard, unchanged behavior. Turn it on and you can choose a limit of up to 5 devices signed in at once, manage the list, and remove any of them, all from Account security."
        }
      ],
      changed: [
        {
          title: "Story privacy",
          body: "The audience picker used for your app-wide default Story privacy and for a one-off override on a specific post is now the exact same screen in both places, instead of two separately built versions."
        },
        {
          title: "Email change confirmation",
          body: "Changing your account email now asks for the new address twice — a \"new email\" and \"confirm new email\" field, matching the same pattern already used for passwords — so a typo isn't discovered only after the change has already gone through."
        },
        {
          title: "Privacy Policy, Terms & Conditions, and Community Guidelines",
          body: "All three were substantially expanded to cover everything in this update — Communities, the Media Vault and Intruder Photo, chat themes, and more. See the updated pages for the full text."
        }
      ],
      removed: []
    }
  },
  {
    id: "forwarding-settings-revamp-2026-09-19",
    date: "September 19, 2026",
    tag: "major",
    tagLabel: "Major update",
    title: "Message forwarding, a reorganized Settings, and finer-grained control",
    intro:
      "This update is mostly about two things: forwarding a message finally exists, and Settings has been rebuilt from one long list into proper categories — alongside a handful of smaller controls that make the app behave a bit more the way people expect.",
    points: [
      { type: "added", text: "Message forwarding — forward a text message to one of your contacts, permission-gated per chat" },
      { type: "added", text: "Timed mute — mute a chat for a set time, not just forever, from the swipe gesture or chat settings" },
      { type: "added", text: "Unread count badge on the app icon (on launchers that support it)" },
      { type: "added", text: "\"Suggest a strong password\" on sign-up and password reset" },
      { type: "added", text: "Option to separate groups from regular chats in your chat list" },
      { type: "added", text: "\"Lock when I leave the app\" — app lock can trigger the instant you background the app" },
      { type: "added", text: "Auto-lock after a chosen period of inactivity" },
      { type: "added", text: "Hide last-seen or read receipts from one specific person, without turning it off for everyone" },
      { type: "changed", text: "Settings reorganized into category pages — Chats, Notifications, Privacy, Security, Help & About — instead of one long list" },
    ],
    detail: {
      added: [
        {
          title: "Message forwarding",
          body: "Forward a text message straight to one of your 1:1 contacts. This first version covers one text message at a time, forwarded into a 1:1 chat. It's permission-gated: forwarding only works if it's switched on for that source chat, and it's checked again live on the server the moment you actually send it — so if the other person turns forwarding off while you have the screen open, the send is refused rather than quietly going through anyway."
        },
        {
          title: "Timed mute",
          body: "Mute a chat for a set amount of time instead of only \"forever until I turn it back on.\" Available both from the swipe-to-mute gesture on your chat list and from a chat or group's own settings, so every way of muting offers the same choices."
        },
        {
          title: "Unread count badge",
          body: "Turn on a number badge on the app's home-screen icon showing how many unread chats you have, from Settings > Notifications. Worth knowing upfront: Android has no single official badge system, so this behaves differently by phone brand — Samsung, Oppo, Vivo, Xiaomi and similar show a real number, while stock Android/Pixel launchers only ever show a plain dot regardless of the actual count. That's a limit of Android itself, not something the app can fully work around."
        },
        {
          title: "Suggested strong passwords",
          body: "A \"suggest a strong password\" button on both sign-up and password reset, with a copy button next to it and a show/hide toggle. It's generated with a cryptographically secure random source and deliberately never built from your name or email — pulling in identifiable details like that would give anyone who already knows them a head start guessing the password, which defeats the point of generating one in the first place. Tap it again for a different suggestion any time."
        },
        {
          title: "Separate groups from chats",
          body: "An optional switch in Settings > Chats to keep group chats out of your main chat list and viewed separately, for anyone who'd rather not have 1:1s and groups mixed together."
        },
        {
          title: "\"Lock when I leave the app\"",
          body: "A new app-lock setting that locks the app the instant you background it, rather than only when it's fully cold-started again. Sits alongside the existing PIN and biometric unlock rather than replacing either."
        },
        {
          title: "Auto-lock after inactivity",
          body: "Set the app to lock itself automatically after it's been sitting open and idle for a chosen amount of time — a middle ground between locking on every single background and never locking until you close the app yourself."
        },
        {
          title: "Per-contact last-seen & read-receipt privacy",
          body: "Last-seen and read receipts already had an app-wide on/off switch — you can now also hide either one from one specific person only, right from that person's own chat settings, without changing the setting for everyone else."
        }
      ],
      changed: [
        {
          title: "Settings reorganized",
          body: "Settings used to be one long flat list mixing PIN setup, theme, last-seen, muted keywords, legal pages, and everything else together. It's now a clean top-level menu split into Chats, Notifications, Privacy, Security, and Help & About — tap a category, see only what belongs to it. Nothing was removed, it's purely reorganized into fewer things to scroll past to find one setting."
        }
      ],
      removed: []
    }
  },
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
