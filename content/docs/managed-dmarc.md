---
title: Setting up SPF, DKIM & DMARC
slug: managed-dmarc
---

# Setting up your domain for SPF, DKIM & DMARC

Setting up your domain to comply with SPF, DKIM and DMARC requirements that are being
implemented by more and more email providers, is easy with Keila!

<managed-note></managed-note>

## 1. Create a *Send with Keila* Sender
Create a [Sender](/docs/senders) in your Keila project and select the *Send with Keila* option.
Make sure you can receive emails at the *From address*
(e.g. `newsletter@example.com`) so you can receive the confirmation email.

## 2. Pick your Mail From Domain
Choose a subdomain that is not currently used for anything else. This
subdomain will become your *Mail From Domain*. Common choices include `mailings.example.com` or `send.example.com`.

**Note:** You can’t use the *Mail From Domain* in your *From address*. This
means if you configure *send.example.com* as your *Mail From Domain*, you should
still use an email address on your principal domain (e.g.
*newsletter@example.com*) as your *From address* and not an email address on
your *Mail From Domain* (i.e. **don’t use** *newsletter@send.example.com*).


## 3. Update your DNS

Add the following entries to your DNS settings:

**Connect your Mail From Domain with CNAME**:  
`CNAME` `*your-subdomain*.example.com` `public.keila.io`

**Add the Keila DKIM key**:  
`CNAME` `keila._domainkey.example.com` `dkim.public.keila.io`

**Enable DMARC for your main domain**:  
`TXT` `example.com` `v=DMARC1; p=none`

## 4. Submit the Domain Connection Form

Now you’re almost done! Just submit our domain configuration form and we’ll take
care of the rest and get in touch with you.
<br><br><br>
<a href="https://forms.gle/c3SJV8TrLxxzwqZq5" class="link-button">Submit your configuration</a>
