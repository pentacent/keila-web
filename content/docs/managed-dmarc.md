---
title: Setting up SPF, DKIM & DMARC
slug: managed-dmarc
---

# Setting up your domain for SPF, DKIM & DMARC

Setting up your domain to comply with SPF, DKIM and DMARC requirements that are being
implemented by more and more email providers, is easy with Keila!

<managed-note></managed-note>

## 1. Pick an unused subdomain.
Choose a subdomain that is not currently used for anything else. This
subdomain will become your *FROM domain*. Common choices are something
like `mailings.example.com` or `send.example.com`.

## 2. Update your DNS

Add the following entries to your DNS settings:

**Connect your chosen subdomain with CNAME**:  
`CNAME` `*your-subdomain*.example.com` `public.keila.io`

**Add the Keila DKIM key**:  
`CNAME` `keila._domainkey.example.com` `dkim.public.keila.io`

**Enable DMARC for your main domain**:  
`TXT` `example.com` `v=DMARC1; p=none`

## 3. Almost done!

Now you’re almost done! Just submit our domain configuration form and we’ll take
care of the rest and get in touch with you.
<br><br><br>
<a href="https://forms.gle/c3SJV8TrLxxzwqZq5" class="link-button">Submit your configuration</a>
