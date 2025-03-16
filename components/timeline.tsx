"use client";

import { useState } from "react";
import { Terminal, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const timelineData = [
    {
      month: "1-oy",
      title: "Programming Languages(Python)",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Dasturlash tillari, interpretator va kompilyator, IDE, Python dasturlash tili, o`zgaruvchilar, data types (int, float, string, boolean…), shart operatorlari (if, elif, else, match case), list, list metodlari (append, insert, del, remove…),",
      fullContent:
        "Dasturlash tillari, interpretator va kompilyator, IDE, Python dasturlash tili, o`zgaruvchilar, data types (int, float, string, boolean…), shart operatorlari (if, elif, else, match case), list, list metodlari (append, insert, del, remove…), list comprehension, nested list, lug‘at, lug‘at metodlari, nested dict, tsikl operatorlari (for va while), funksiyalar, qiymat qaytaruvchi funksiyalar va qiymat qabul qiluvchi funksiyalar, mavhum funksiya (lambda), rekursiv funksiya, modullar (random, math, hashlib, subprocess, scapy, optparse, socket, requests, os, sys…). Python dasturlash tili orqali turli scriptlar yozish!",
    },
    {
      month: "2-oy",
      title: "Network Administrator",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Tarmoq administratori, hududiy tarmoq tuzish, tarmoq, OSI 7 layers, tarmoq protokollari, IP va MAC manzillar, UDP/TCP, hub, switch (Layer 2 vs Layer 3), router, firewalls, Wi-Fi xavfsizligi, konsol, mis kabel (copper cable), crossover kabel, web-server, DNS, WAF (Web Application Firewall), portlar, VLAN, STP (Spanning Tree Protocol), RSTP (Rapid Spanning Tree Protocol), EtherChannel, Channel-group, faol (active) va passiv (passive) kanal, LACP (Link Aggregation Control Protocol), PAgP (Port Aggregation Protocol),",
      fullContent: `Tarmoq administratori, hududiy tarmoq tuzish, tarmoq, OSI 7 layers, tarmoq protokollari, IP va MAC manzillar, UDP/TCP, hub, switch (Layer 2 vs Layer 3), router, firewalls, Wi-Fi xavfsizligi, konsol, mis kabel (copper cable), crossover kabel, web-server, DNS, WAF (Web Application Firewall), portlar, VLAN, STP (Spanning Tree Protocol), RSTP (Rapid Spanning Tree Protocol), EtherChannel, Channel-group, faol (active) va passiv (passive) kanal, LACP (Link Aggregation Control Protocol), PAgP (Port Aggregation Protocol), kirish (access) va trunk rejimlari, IP marshrutizatsiya (IP routing), statik va dinamik marshrutizatsiya, IP route, 802.1Q encapsulation, serverlar, port xavfsizligi (port security), LAN, WAN, WLAN, VPN, PAN, SAN, SD-WAN, DHCP, subnet mask, gateway, ko‘prik adapteri (bridge adapter), NAT, SSH, Telnet, PuTTY, Router-on-a-stick, IPv6, ACL (Access Control List), QoS (Quality of Service), MPLS (Multiprotocol Label Switching), BGP (Border Gateway Protocol), OSPF (Open Shortest Path First), EIGRP (Enhanced Interior Gateway Routing Protocol), IPsec.`,
    },
    {
      month: "3-oy",
      title: "Windows OS",
      icon: <Shield className="w-3 h-3" />,
      content:
        "Windows operatsion tizimi tuzilishi, ishlashi uchun muhim servislar va ularning vazifalari, xavfsizlik choralari, hardening uchun zarur ishlar, UAC (User Account Control), Windows API/WinAPI, process va threads (ps/threads), WinInit va WinLogon, DLL (Dynamic Link Library), WSL (Windows Subsystem for Linux), BIOS va UEFI, MBR va GPT, SRM (Security Reference Monitor) va LSASS (Local Security Authority Subsystem Service), Reestr (Windows Registry), Mimikatz, Digital Forensics, RAM capture, maxsus forensika operatsion tizimlari, Velociraptor, NirSoft, FTK Imager, DataDump, MRU (Most Recently Used), MobSF (Mobile Security Framework), AndroSpy, ADB (Android Debug Bridge), PowerShell,",
      fullContent:
        "Windows operatsion tizimi tuzilishi, ishlashi uchun muhim servislar va ularning vazifalari, xavfsizlik choralari, hardening uchun zarur ishlar, UAC (User Account Control), Windows API/WinAPI, process va threads (ps/threads), WinInit va WinLogon, DLL (Dynamic Link Library), WSL (Windows Subsystem for Linux), BIOS va UEFI, MBR va GPT, SRM (Security Reference Monitor) va LSASS (Local Security Authority Subsystem Service), Reestr (Windows Registry), Mimikatz, Digital Forensics, RAM capture, maxsus forensika operatsion tizimlari, Velociraptor, NirSoft, FTK Imager, DataDump, MRU (Most Recently Used), MobSF (Mobile Security Framework), AndroSpy, ADB (Android Debug Bridge), PowerShell, Empire, CMD (Command Prompt), DoD (Department of Defense) Security standartlari, SAM (Security Account Manager) va SID (Security Identifier) xavfsizligi, Windows Firewall, NTLM (NT LAN Manager), Audit Policy Security, Event Log boshqaruvi, klonlash va zaxiralash (cloning, backup), WRP/WFP (Windows Resource Protection / Windows File Protection), DACL/ACL (Discretionary Access Control List / Access Control List), CVE/CVSS (Common Vulnerabilities and Exposures / Common Vulnerability Scoring System), 0-day ekspluatlar va MITRE ATT&CK, AppLocker, Windows Server 2022 xavfsizlik masalalari, hardening va Active Directory xavfsizligi va boshqa ko‘plab mavzular.",
    },
    {
      month: "4-oy",
      title: "Network Analyst and Network Security",
      icon: <Terminal className="w-3 h-3" />,
      content:
        "Tarmoq analizi, paketlar, network protokollar, packet ID, HTTP/S, DNS, SMTP, FTP, ICMP, ARP, UDP, TCP, SSL, TLS 1.2 va TLS 1.3, Wireshark, packet capture, HTTP query, request, response, methods, server request va response (POST, GET, DELETE, UPDATE …), network interfeys, WLAN, eth0, lo, cap, pcap, packet analiz, xavfsizlik algoritmlari (MD5, SHA-1, SHA-256, SHA-512, WPA/WPA2/WPA3),",
      fullContent: `Tarmoq analizi, paketlar, network protokollar, packet ID, HTTP/S, DNS, SMTP, FTP, ICMP, ARP, UDP, TCP, SSL, TLS 1.2 va TLS 1.3, Wireshark, packet capture, HTTP query, request, response, methods, server request va response (POST, GET, DELETE, UPDATE …), network interfeys, WLAN, eth0, lo, cap, pcap, packet analiz, xavfsizlik algoritmlari (MD5, SHA-1, SHA-256, SHA-512, WPA/WPA2/WPA3), encode va decode hashes, hashes, Ettercap, ARP poisoning, DNS poisoning, airmon-ng, managed mode, monitor mode, airodump-ng, wordlists (rockyou.txt, hashlist.txt va boshqalar), aireplay-ng, BSSID, channel, handshake, crunch wordlists, hashcat attacks, brute-force attack, dictionary attack, rule-based attack, hybrid attack, combined attack, hashcat-utils, hash-identifier, hashid, get hash, create hashlist, change value to hash by Python, antivirus, ClamAV, clamscan, clamdscan, freshclam, rekursiv scan, directory scan, quarantine, logs, auto scan, Windows va Linux konfiguratsiyalari.`,
    },
    {
      month: "5-oy",
      title: "WAPT - Web Application Pentesting!",
      icon: <Shield className="w-3 h-3" />,
      content:
        "Dolzarb, qiziqarli va doimiy daromad keltiruvchi kiberxavfsizlik yo‘nalishlaridan biri. Bu oyda biz asosiy tushunchalar: URL, URI, Absolute Path, Request, Response, Client-side, Server-side, Static/Dynamic saytlar, Texnologiyalar (Technology), CMS, Dasturlash tillari (Language), Xavfsizlik (Security), Firewall, Monitoring, Detecting, shuningdek, Bug Bounty, Report, OWASP Top 10, Security Risks, BAC (Broken Access Control), CF (Cross-Frame Scripting), Injection (SQL, Command, HTML, XML, XXE), WSTG (Web Security Testing Guide), ZAP (OWASP Zed Attack Proxy), HTTP/S, SSL/TLS, Ma`lumotlar bazasi (Database/DB).",
      fullContent: `Dolzarb, qiziqarli va doimiy daromad keltiruvchi kiberxavfsizlik yo’nalishlaridan biri. 
    Bu oyda biz asosiy tushunchalar: URL, URI, Absolute Path, Request, Response, Client-side, Server-side, Static/Dynamic saytlar, 
    Texnologiyalar (Technology), CMS, Dasturlash tillari (Language), Xavfsizlik (Security), Firewall, Monitoring, Detecting, 
    shuningdek, Bug Bounty, Report, OWASP Top 10, Security Risks, BAC (Broken Access Control), CF (Cross-Frame Scripting), 
    Injection (SQL, Command, HTML, XML, XXE), WSTG (Web Security Testing Guide), ZAP (OWASP Zed Attack Proxy), HTTP/S, SSL/TLS, 
    Ma’lumotlar bazasi (Database/DB), Response Status va Metodlar, DNS, Cookie, Web Application Architecture, Web Server, CSP (Content Security Policy), 
    XSS (Cross-Site Scripting), SQL Injection, LFI (Local File Inclusion), IDOR (Insecure Direct Object References), SSRF (Server-Side Request Forgery), 
    CSRF (Cross-Site Request Forgery), Bughunter, va Top Portlar kabi mavzularni o‘rganamiz.
    
    Shuningdek, Information Gathering, CVE (Common Vulnerabilities and Exposures), EXPDB (Exploit Database), GHDB (Google Hacking Database), 
    Shodan, Recon, Nmap, Gobuster, GoSpider, Arjun, GitHub/Lab, Dorker, Enumeration, SQLMap, WAF Bypass va Firewall chetlab o‘tish, 
    Integratsiya, Reportlash, Masscan, Burp Suite, ASN (Autonomous System Number) skaneri, Joomscan, WPScan, Drupwn, CMScan, Fuzzing, 
    HackerOne/Hacker101, Acunetix, Netsparker kabi zamonaviy vositalardan foydalanishni ham o’z ichiga oladi.`,
    },

    {
      month: "6-oy",
      title: "Real targetlar ustida amaliyot(Practice)Vaow amazing 🤩	",
      icon: <Shield className="w-3 h-3" />,
      content: `Butun kurs davomida o‘rganilgan bilim va ko‘nikmalarni real loyihalar orqali mustahkamlash! Ishlab turgan real tarmoq, tizim va veb-saytlarni tekshirish, zaifliklarni aniqlash va ularni bartaraf etish, TryHackMe, HackTheBox, OverTheWire kabi platformalarda turli darajadagi modullarni bajarish, shuningdek, PortSwigger, DVWA, BWAPP kabi xavfsizlik bo‘yicha maxsus muhitlarda amaliy tajriba orttirish. Tarmoq va tizim xavfsizligini tekshirish, Firewall, IDS/IPS tizimlarini sozlash va hujumlarni simulyatsiya qilish. Web-zaifliklar tahlili, SQL Injection, XSS, IDOR, CSRF, SSRF kabi zaifliklarni aniqlash va ularni ekspluatatsiya qilish. Nessus, Burp Suite, ZAP Proxy, Dirbuster, Nikto va boshqa xavfsizlik vositalari orqali tizimlarni tekshirish hamda zaifliklarni bartaraf etish bo‘yicha amaliy mashg‘ulotlar. Nginx, Apache, Ngrok kabi serverlarning ishlash prinsiplarini chuqur o‘rganish, turli konfiguratsiya muammolarini bartaraf etish.`,
      fullContent: `Butun kurs davomida o‘rganilgan bilim va ko‘nikmalarni real loyihalar orqali mustahkamlash! Ishlab turgan real tarmoq, tizim va veb-saytlarni tekshirish, zaifliklarni aniqlash va ularni bartaraf etish, TryHackMe, HackTheBox, OverTheWire kabi platformalarda turli darajadagi modullarni bajarish, shuningdek, PortSwigger, DVWA, BWAPP kabi xavfsizlik bo‘yicha maxsus muhitlarda amaliy tajriba orttirish. Tarmoq va tizim xavfsizligini tekshirish, Firewall, IDS/IPS tizimlarini sozlash va hujumlarni simulyatsiya qilish. Web-zaifliklar tahlili, SQL Injection, XSS, IDOR, CSRF, SSRF kabi zaifliklarni aniqlash va ularni ekspluatatsiya qilish. Nessus, Burp Suite, ZAP Proxy, Dirbuster, Nikto va boshqa xavfsizlik vositalari orqali tizimlarni tekshirish hamda zaifliklarni bartaraf etish bo‘yicha amaliy mashg‘ulotlar. Nginx, Apache, Ngrok kabi serverlarning ishlash prinsiplarini chuqur o‘rganish, turli konfiguratsiya muammolarini bartaraf etish. Active Directory Listener, identifikatsiya zaifliklari (Kerberoasting, Pass-the-Hash, Golden/Silver Ticket) va ularni mustahkamlash bo‘yicha amaliy ishlar. Aniqlangan zaifliklar bo‘yicha professional report tayyorlash, ularning ekspluatatsiya darajasini baholash va ularga qarshi tavsiyalar ishlab chiqish. IndexOutOfRange, Memory Overflow, Race Condition, Privilege Escalation kabi zaifliklarni aniqlash va tuzatish bo‘yicha amaliy topshiriqlar bajarish. MITM (Man-in-the-Middle) hujumlari, ARP Poisoning, DNS Spoofing, Packet Sniffing kabi usullarni simulyatsiya qilish va ularni aniqlash yo‘llarini o‘rganish. Qo‘shimcha mavzular sifatida Nikto orqali web-serverlarni skanerlash va zaifliklarni aniqlash, MITM hujumlarini tahlil qilish, dasturiy zaifliklarni ekspluatatsiya qilish va ularni tuzatish, Active Directory xavfsizlik zaifliklarini o‘rganish kabilar ham qo‘shiladi. Bu bosqichda barcha o‘rganilgan bilimlar amaliy ishlarga yo‘naltiriladi, real tizimlar ustida ishlash orqali kiberxavfsizlik bo‘yicha to‘liq tajribaga ega bo‘lish imkoniyati yaratiladi! 🚀
`,
    },
  ];

  return (
    <div className="px-2 py-3">
      <h2 className="text-sm font-bold text-primary mb-3">Kurs rejasi</h2>

      <div className="relative">
        {/* Timeline chiziq */}
        <div className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-primary/20" />

        {/* Timeline elementlari */}
        <div className="space-y-3">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-6 ">
              {/* Nuqta */}
              <div className="absolute left-0 w-[18px] h-[18px] bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-[10px] font-bold">
                  {index + 1}
                </span>
              </div>

              <div className="cyber-border p-2 rounded-lg bg-accent/5">
                {/* Sarlavha */}
                <div className="flex items-center gap-1 mb-1.5">
                  {item.icon}
                  <h3 className="text-xs font-bold text-primary">
                    {item.month} {item.title}
                  </h3>
                </div>

                {/* Kontent */}
                <p className="text-[11px] text-muted-foreground mb-1">
                  {expandedIndex === index ? item.fullContent : item.content}
                </p>

                {/* Koproq korish tugmasi */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full h-6 text-[10px] text-primary hover:bg-primary/5"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? (
                    <ChevronUp className="w-3 h-3 mr-1" />
                  ) : (
                    <ChevronDown className="w-3 h-3 mr-1" />
                  )}
                  {expandedIndex === index ? "Yopish" : "Ko'proq ko'rish"}
                </Button>

                {/* Bonus */}
                <div className="mt-1">
                  <span className="text-[10px] text-primary/60">+</span>
                </div>
              </div>
            </div>
          ))}

          {/* Natija */}
          <div className="relative pl-6">
            <div className="absolute left-0 w-[18px] h-[18px] bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-[10px]">✓</span>
            </div>

            {/* <div className="cyber-border p-2 rounded-lg bg-primary/5">
              <h3 className="text-xs font-bold text-primary mb-1.5 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Natija
              </h3>
              <p className="text-[11px] text-muted-foreground">
                Barcha darslar real targetlarda 100% amaliyot korinishida
                otiladi. Kurs yakunida onlayn yigilish otkaziladi.
              </p>
              <div className="mt-2 p-1.5 cyber-border rounded bg-secondary/5">
                <p className="text-[10px] text-primary">
                  Oqituvchi: Malik Kurbanov (shohmalik)
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
