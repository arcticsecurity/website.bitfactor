---
blog_title: SME Case Study
blog_image_path: /images/content/iStock-879892156.jpg
blog_image_cover: false
blog_description: >-
  Many organizations lack cyber resilience, and particularly SMEs stand to lose
  the most when it comes to cyberattacks. This blog presents a real-life SME
  case and how we spotted and remediated the security issue before harm was
  realized.
meta_title: SME Case Study
meta_description: >-
  Many organizations lack cyber resilience, and particularly SMEs stand to lose
  the most when it comes to cyberattacks. This blog presents a real-life SME
  case and how we spotted and remediated the security issue before harm was
  realized.
date: 2021-03-17 12:00:00 +0200
tags:
blog_category:
  - blog
writer:
  employees:
og_image_path: /images/content/iStock-879892156.jpg
twitter_image_path:
og_title:
og_description: >-
  Many organizations lack cyber resilience, and particularly SMEs stand to lose
  the most when it comes to cyberattacks. Read more on our recent blog post
  about a real-life SME case and how we spotted and remediated the security
  issue before harm was realized.
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
March 17, 2021

Many organizations lack cyber resilience, and particularly small and medium-sized enterprises (SMEs) stand to lose the most when it comes to cyberattacks. This blog post presents a real-life SME case and how we spotted and remediated the security issue before harm was realized.

## **Background**

There is a massive number of vulnerable and compromised hosts globally. Cybercriminals exploiting them remain one of the significant causes of cybersecurity incidents. Many successful attacks exploit vulnerabilities in poorly configured machines or those in which patches may have been issued, but not applied. Establishing and actively maintaining security in systems should be one of the key factors in every organization. Implementing proper authentication, authorization, and accounting (AAA) management is also critical to secure access to devices and services. Moreover, recovery from a cyber attack of various types should be planned and practiced.

However, investing in security technology alone is not a silver bullet. Well-defined processes and policies combined with trained people are an essential part of organizations’ ICT lifecycle management. Despite the current and increasing threats, many organizations lack cyber resilience. Especially small and medium-sized businesses (SMBs) stand to lose the most when it comes to cyberattacks, yet many do not prioritize it. SMEs may lack knowledge, time, skills, and money, and as a result of these, also motivation, to invest in security. SMEs might hang on to the false assurance that large companies are more of a target for cybercriminals. However, according to the&nbsp;[2019 Verizon Data Breach Investigations Report](https://enterprise.verizon.com/resources/executivebriefs/2019-dbir-executive-brief.pdf), 43% of data breaches hit SMEs.

The unfortunate reality is that many organizations don't have appropriate procedures to keep their devices updated. More worrying is that organizations don't have a firm grasp of their machines' existence or state on their networks. We help organizations by letting them know if there are security issues or vulnerable systems in their networks, reported by a third-party, or even announced publicly. This way, organizations know to act accordingly against security issues before they cause serious harm to their business. Failing to patch vulnerable systems in a timely manner, organizations are putting themselves at huge risk. We want to raise this problem through one SME case that happened just recently.

## **Evaluation and Findings**

This example case relates to a vulnerable Exim mail server found in the ICT hosting provider’s infrastructure. Exim is a mail transfer agent responsible for receiving, routing, and delivering email messages. The particular vulnerability in Exim allows attackers to execute code remotely, gain root access to it, and take control of unpatched systems. To carry this out, you can find open-source code from GitHub.

How did we find the affected organization then? Our&nbsp;[Arctic HUB](https://arcticsecurity.com/products/hub/) product collects high-quality threat data from third-party data sources. After collecting the data, the HUB harmonizes it into a uniform format and enriches the data with the network and geolocation augmentation. With this information, we can identify the geographical location and ownership of compromised machines running worldwide.

[Shodan by Arctic Security](https://arcticsecurity.com/news/2020/05/20/arctic-security-helps-to-improve-victim-notification-with-shodan-integration/) is an excellent data source that provides a wide variety of threat information about vulnerabilities and misconfigured systems and services. This data source also exposes vulnerable Exim servers. As we knew that Exim servers are widely used globally, we first created a bird's-eye view with our HUB to see the current state. As Figure 1 below illustrates, we can see that there are over 160 000 compromised hosts affected by this security flaw at the moment.

![](/images/content/vulnerable-exim.png){: width="876" height="661"}Figure 1. Over 160 000 systems vulnerable to Exim across the world. Our HUB product automatically notifies the owners of such vulnerable systems around the globe in a timely manner.

We picked one of the threat observations to examine it in more detail. Based on the IP address, we were able to identify the affected company. We were able to see the other services beyond the same IP address with a little deeper digging and utilizing the&nbsp;[Shodan](https://www.shodan.io/) search engine. We discovered one of the hosting provider's customers being especially vulnerable to it by going into more detail regarding the flaw's coverage and impact. Based on their website, we were able to see that the affected organization collects and stores location data for over 1000 customers. Exploiting the vulnerability in the hosting provider’s unpatched system may eventually risk compromising the confidential customer data critical to the business. What comes to the data security breaches, privacy, and data protection legislations come into play. In this case, unauthorized access to confidential data would have devastating effects on the reputation and business of both the affected company and the hosting provider. Our automated cyber threat intelligence solutions tap into this problem.

## **Analysis**

Unpatched systems are easy targets for attackers. Our more in-depth investigation revealed that the service provider's system was compromised through insufficient security procedures and processes. Vulnerabilities don't typically show up in the everyday use of the service or application. Too often, you find them when someone is already exploiting them. This is a good example of a case where a single problem is a stepping stone to bigger issues. With our tools, we notice that threat observations have an impact on both big and small companies.

Our solution is to utilize third-party threat data providers to detect compromised machines and vulnerable services globally, and to automate threat information sharing to the right recipients. For instance, Managed Security Service Providers (MSSPs) utilize our solutions to automate victim notifications to their customers. SME businesses may not have the resources and expertise to invest in security, so opting for MSSPs is a great choice. With our tools, MSSPs can provide victim notifications as a service to their customers who can put cyber threats into operation as everyday IT tasks.

Due to the existing and increasing number of cybersecurity breaches, it is clear that any&nbsp; business must improve its security infrastructure and processes. As this example case indicates, the unfortunate situation is that many organizations only recognize it after they have a severe security flaw in their systems that potentially harms their reputation and business. In this example, harm was avoided thanks to our HUB product that connected the essential information with the correct recipient early enough.

## **Remediation and Disclosure**

Once it was evident that the service provider posed a danger to themselves and their customers, we contacted the local, national cybersecurity center (NCSC) with our findings. The NCSC reached out to the hosting provider and gave instructions on how to remediate the issue. The company was able to fix the flaw in its system.

The real issue is that the Internet remains and will always be full of compromised devices. One of the biggest cybersecurity problems is that the information about vulnerabilities and compromised systems doesn't reach the right recipients. For this reason, automation is in a highly significant role, and that is where Arctic Security comes into the picture. With our products, we collect and share threat information to such customers that can help both themselves and their customers fix cybersecurity issues. We help you stay protected.
