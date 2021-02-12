---
blog_title: >-
  SolarWinds: Going beyond attribution - all in a day’s work for a  Bicycle
  Repair Man
blog_image_path: /images/content/iStock-1170680101.jpg
blog_image_cover: true
blog_description: >-
  Do you know how Monty Python can also reflect on information security? The
  recent SolarWinds case points out how loose basis organizations' security
  management is.
meta_title: >-
  SolarWinds: Going beyond attribution - all in a day’s work for a  Bicycle
  Repair Man
meta_description: >-
  Do you know how Monty Python can also reflect on information security? The
  recent SolarWinds case points out how loose basis organizations' security
  management is.
date: 2021-02-12 12:00:00 +0200
tags:
blog_category:
  - blog
writer:
  employees:
    - lari-huttunen
og_image_path: /images/content/iStock-1170680101.jpg
twitter_image_path: /images/content/iStock-1170680101.jpg
og_title: >-
  SolarWinds: Going beyond attribution - all in a day’s work for a  Bicycle
  Repair Man
og_description: >-
  Do you know how Monty Python can also reflect on information security? The
  recent SolarWinds case points out how loose basis organizations' security
  management is.
downloadable_content: false
downloadable_content_name:
form_title:
form_description_markdown:
form_thankyou_title:
form_thankyou_description:
form_file_path:
form_file_link_label:
_comments:
  date: Invalid date
  tags: >-
    Tags of content of the blog post for example "Google Analytics", "GitHub"
    etc
  writer: 'Select the writers, max 3'
  downloadable_content: Include downloadable content in blog post.
  downloadable_content_name: >-
    REQUIRED: Name used in activecampaign to send the correct email with
    downloadable content.<br>(name of the tag in active campaign automation)
  form_title: Fill if using downloadable content
  form_description: Fill if using downloadable content
  form_thankyou_title: Fill if using downloadable content
  form_thankyou_description: Fill if using downloadable content
---

February 12, 2021

Monty Python's "Bicycle Repair Man" is a fitting allegory for the information security industry. It is filled with supermen and -women who fight bad guys with their super powers, such as threat hunting, attribution and TTPs. The big question however is, are enough of us looking after our own infrastructure, our “bicycles”?

The SolarWinds case is no different, as in the heat of the moment everybody is focused on attributing the malice and all things related. My position is that in addition, we should also pay attention to what may have led into this situation, which oftentimes simply is poor security posture due to a failure in people, processes or technology.&nbsp;

Even more precisely, the crux of the problem often lies in poor IT processes related to patching, access control or other "boring stuff", such as keeping X.509 certificates from expiring.

## How dare you say that out loud?

Simply, because for more than a decade I've been helping people in their mission to reduce incidence of suspected compromise, publicly exposed vulnerable services or open services which may be unintentionally exposed to the Internet - at nation scale and through automation.

## How is this related to Solarwinds, then?

Solarwinds is a company, whose mission is to make the IT administration simpler and more secure at scale. This is a great mission and I fault the company not with what they have built or how secure their products are.

The challenge seems to be the fact how well they have their own people, processes and technology in line with what they enable their customers to achieve through their products.

## Can you show me the proof?

Yes, as the proof is in the open for everyone to see. Look at their publicly available network assets and connect the dots between the assets and known vulnerabilities observed through Shodan. I did this with the help of our research into 86 specific known and vetted issues on Shodan and matched the data against the SolarWinds assets and the picture is quite clear and unflattering.

## Why are you singling them out?

Their case is actual and well known and if a tragedy on such a scale can contribute to the common good, then we should seize the opportunity. On 2021-01-12, we reached out to Solarwinds to confirm that the network assets we used for the evaluation actually belong to them. We even offered them the findings to help them mitigate them. Unfortunately, they did not respond to our requests and we are now publishing our results in this blog post.

Given the constraints I lay out below, they clearly have not done their due diligence and as a result we have this mess, where threat actors must have had a field day in gaining initial access to the company - no zero days needed.

I implore you to reflect that in addition to threat signatures and TTPs about the malice, we need to start looking at the security posture of organizations as well - and not just after a high profile breach such as this one. The information I present below after all, is public and most likely used by threat actors every single day.

Furthermore, the vulnerabilities I detail below, plague most organizations on the Internet. Picking three prominent US defense contractors at random, I found most of the same issues related to their network assets as well, namely General Dynamics, Harris Corporation or Northrop Grumman.

## So what's the evidence?

As stated above, I used the 86 vetted queries from Shodan against the publicly available network asset information related to Solarwinds. In essence, I used the same approach as the cyber rating companies do, which means that they rely in large part on publicly available IP network registration information when producing their ratings of you.

To be reproducible, the uncertainties related to the interpretation of the results must at least account for the following four things:

1. That the network asset in question belongs to the right party, which in this case study should be SolarWinds.
2. That the service in question may be honeypot, whose intention is to monitor for scanning and/or exploitation of the emulated service.
3. That the service implementation based version matching suffers from patch backporting, which means that the detection or assessment method cannot solely rely on a simple version banner.
4. That the party doing the interpretation has to be able to understand the impact, as just having all the Shodan matches against a network asset alone makes interpretation difficult in practice.

## What are the observations then?

In this case, I used evidence from the last 6 months mapped against the publicly available network asset attributable to SolarWinds. Mapping the 86 topics against those assets with automation, I was able to detect seven distinct vulnerabilities in their infrastructure, as follows:

![](/images/content/image1-1.png){: width="1390" height="532"}

### Expired X.509

If you have ever done systems administration of any type of Internet facing services, you have battled against time and expiration of X.509 certificates, which prove the identity of your service to its users. You're probably thinking right now that wait, we should be talking about vulnerabilities, about CVEs, right? Remote code execution, the sexy stuff. My favorite retort to that is the following: the Equifax data breach which exposed the PII of 147 million people was largely caused by expired X.509 certificates in critical monitoring systems.&nbsp;

shodan dork: ssl.cert.expired:true&nbsp;

ref: https://www.csoonline.com/article/3444488/equifax-data-breach-faq-what-happened-who-was-affected-what-was-the-impact.html

### SSLv2&nbsp;

The arms race against crypt analysis has accelerated over the past couple of years. This means that cryptographic hashes or ciphers perfectly acceptable five years ago have become obsolete. SSL version 2 is a cryptographic protocol, which hasn’t met the requirement for Internet facing services for even longer. Its use was prohibited by RFC 6167 in 2011.&nbsp;

shodan dork: ssl.version:sslv2&nbsp;

ref: https://tools.ietf.org/html/rfc6176&nbsp;

### Exposed SNMP&nbsp;

Simple Network Management Protocol is very handy for gathering low-level information about networked devices and their status, especially in the switch and router space. As demonstrated by OUSPG PROTOS project in 2002, SNMP, whatever the version, is not and will not be a protocol fit for the Internet. Access to SNMP implementations must be access controlled to those devices, which are under your control, no matter which version of the protocol the device is speaking. Google "c06-snmp test suite" and assess the ramifications yourself, if you need more background on the issue. Moreover, threat actors have abused SNMP for reflected DDoS attacks for years, since sending a single spoofed UDP packet with the source address of the target will yield a huge amplification factor to their DDoS traffic.

shodan dork: port:161

shodan dork: port:161 snmp&nbsp;&nbsp;

ref: https://en.wikipedia.org/wiki/Oulu\_University\_Secure\_Programming\_Group&nbsp;

### Exposed Telnet&nbsp;

Before the advent of SSH, telnet was the de facto protocol for remote management or shell access to systems or devices. In 1995, a Finnish engineer called Tatu Ylönen invented SSH, which made the telnet obsolete overnight. 25 years later, however, telnet is still going strong for some reason. There simply is not any Internet facing use case for the service, period.&nbsp;

shodan dork: port:23

shodan dork: telnet

ref: https://en.wikipedia.org/wiki/Telnet&nbsp;

### Exposed MySQL&nbsp;

Even if MySQL database engine is the de facto component as a backend service for many an Internet facing service, exposing it directly to the Internet without any further access control in front of it is inviting disaster. Recently, there was a major data breach in Finland, which allegedly resulted from the database backend being directly exposed to the Internet without any further access control in front of it. Layered security is not just a fancy buzz word. In many cases the database backend doesn't even need to be reachable over the network at all, but when it does, access to it must be locked down to only those hosts, which actually need it.

shodan dork: product:"MySQL"&nbsp;

ref: https://vpsie.com/knowledge-base/securing-mysql-database-shared-hosting-environment/&nbsp;

### CVE-2015-0204 a.k.a. FREAK

Compliance with US cryptographic export controls lies at the heart of this vulnerability. An Internet facing service simply should not support negotiation of an encrypted connection, which is possible to decipher using $100 worth of cloud computing resources. We could even rename this vulnerability, man-in-the-middle made easy.

shodan dork: vuln:CVE-2015-0204&nbsp;

ref: https://en.wikipedia.org/wiki/FREAK

ref: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-0204

### CVE-2019-10149&nbsp;

Exim is a popular Mail Transfer Agent, MTA, used in many mostly linux-based servers. It has had a mottled history with information security and in 2019, a serious flaw was discovered in it, which leads to remote code execution. Please note that using this dork especially, one must understand the implication of backporting security fixes and how they are reflected in the version banner.&nbsp;

shodan dork: vuln:CVE-2019-10149

ref: https://nvd.nist.gov/vuln/detail/CVE-2019-10149

## Conclusions

I know maintaining and repairing “bicycles” is tedious. This work, however, is the thing that will keep you safer and make it more difficult for the threat actors to attack you. I’m not saying that the threat actor’s initial access in the case of SolarWinds could’ve been prevented by addressing the specific issues I highlighted above, but it would’ve made it more difficult.

Building security in and making it layered is the only foundation you can build on that gives you predictability in a much more coherent way than investing in the magic security technology X that exploits the hype of the day. Building security in, means investing in people and processes as well.

One of the big challenges is that this type of information security work is not viewed as glorious or sought after. It is often given to junior people and the career paths of the sysadmins are not made lucrative. Investing in good people will lead into them making good technology choices and a good security culture is only the result of balancing between usability and controls.

Understanding that you will be breached given enough of time on the Internet, is the only attitude you can have. That is why utilizing external third party information looking at your assets from the attacker’s perspective is one of the methods that clearly has not been adopted at scale. Shodan is a good service that can be used properly and can help you address the basics. Just subscribing to their notifications, however, will not suffice. You may need help to distill it into actionables, but don’t leave that work to the bad guys. All that information is out there, it is in the open and it can help you better protect yourself.
