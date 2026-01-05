# 📦 LagerMaster V55 PRO

LagerMaster V55 PRO ist eine schlanke, webbasierte Lagerverwaltung, die speziell für die Nutzung auf Debian-Servern entwickelt wurde. Das System ist optimiert für mobile Endgeräte und unterstützt sowohl USB-Barcode-Scanner als auch die integrierte Kamera von Smartphones/Tablets.



## ✨ Hauptfunktionen

- 🔍 **Duales Scannen:** Nutzen Sie die Geräte-Kamera oder einen externen USB/Bluetooth-Barcode-Scanner.
- ⚡ **Schnell-Entnahme:** Spezieller 10-Sekunden-Timer-Modus für blitzschnelle Bestandsreduzierung nach dem Scan.
- 📝 **Inventur-Modus:** Geführtes Zählen mit visueller Rückmeldung (✅ Markierung) für bereits erfasste Artikel.
- 💰 **Wertkalkulation:** Automatische Berechnung des Lagerwerts basierend auf Lieferantenpreisen.
- 🏷️ **Etikettendruck:** Generierung von Barcode-Etiketten für das Regal direkt aus dem Browser.
- 📊 **Datenexport:** Exportieren Sie Ihren gesamten Bestand jederzeit als CSV-Datei.
- 🛡️ **Lokal & Sicher:** Speicherung in einer lokalen SQLite-Datenbank – Ihre Daten bleiben bei Ihnen.

---

## 🛠️ Installation auf Debian/Ubuntu

Befolgen Sie diese Schritte, um LagerMaster auf Ihrem Server einzurichten:

### 1. Voraussetzungen installieren
Stellen Sie sicher, dass Node.js und Git installiert sind:
```bash
sudo apt update
sudo apt install -y nodejs npm git

2. Projekt klonen

Laden Sie das Repository von GitHub herunter:
git clone [https://github.com/cb993/LagerMaster-V55-PRO.git](https://github.com/cb993/LagerMaster-V55-PRO.git)
cd LagerMaster-V55-PRO

3. Abhängigkeiten installieren

npm install

4. Server starten
node server.js

🚀 Dauerhafter Betrieb (Produktion)

Damit der LagerMaster im Hintergrund läuft und nach einem Server-Neustart automatisch startet, empfehlen wir PM2:

# PM2 global installieren
sudo npm install -g pm2

# Anwendung starten
pm2 start server.js --name lagermaster

# Autostart einrichten
pm2 save
pm2 startup

📖 Bedienungshilfe
Funktion,Beschreibung
Normaler Scan,Öffnet die Artikelansicht mit Entnahme-Button.
Inventur,Im Admin-Bereich starten; Scannen erlaubt direkte Mengeneingabe.
Löschen,"Auf das Stift-Symbol (✎) klicken, dann unten auf ""Löschen"" (2-fache Bestätigung)."
Händler,Mehrere Lieferanten und Preise pro Artikel hinterlegbar.

🛡️ Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert – freie Nutzung für jedermann.



