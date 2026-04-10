# ESP32 Generative Art — Ayiti Se

A generative art display running on an ESP32 with a TFT screen, visualizing the landscapes of Haiti as described in the song *"Ayiti se"* by Mikaben. The animation renders sea waves, mountains, a tropical sunset, and shooting stars — all driven procedurally without any external assets.

---

## Hardware Requirements

| Component | Details |
|---|---|
| Microcontroller | LilyGo T-Display PICO C3 |
| CPU | Xtensa® dual-core 32-bit LX6 |
| ROM | 448 KB |
| SRAM | 520 KB |
| Display | Built-in 1.14" ST7789 TFT (135 × 240 px) |
| Battery *(optional)* | 3.7 V LiPo (JST connector, not included with board) |
| USB | USB-C for programming and power |

---

## Software Dependencies

- [Arduino IDE](https://www.arduino.cc/en/software) 2.x **or** [PlatformIO](https://platformio.org/)
- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) library by Bodmer
- Board support: **ESP32** via Arduino Board Manager (`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`)

---

## Installation

### 1 — Set up the Arduino IDE

1. Open **File → Preferences** and add the ESP32 board manager URL above.
2. Go to **Tools → Board → Boards Manager**, search for *esp32*, and install the Espressif package.

### 2 — Configure TFT_eSPI

After installing the library, open its `User_Setup_Select.h` file (inside the library folder) and enable the setup file for the LilyGo T-Display:

```cpp
#include <User_Setups/Setup25_TTGO_T_Display.h>
```

Comment out any other active `#include` line in that file.

### 3 — Flash the sketch

1. Connect the board via USB-C.
2. Select **Tools → Board → ESP32 Arduino → TTGO T1** (or the matching LilyGo variant).
3. Set **Upload Speed** to `921600`.
4. Open `generative_art.ino` and click **Upload**.

---

## Usage

Once flashed, the board boots directly into the animation — no interaction required. If a battery is connected, the display runs standalone without USB.

| Visual element | What it represents |
|---|---|
| Gradient sky + horizon | Tropical Haitian sunset |
| Animated wave layers | Beaches and rivers ("Ayiti se") |
| Mountain silhouette | The mountains of Haiti |
| Shooting stars | Magic and wonder in the lyrics |

Press the onboard **reset button** to restart the animation from the beginning.

---

## Project Structure

```
generative_art/
├── generative_art.ino   # Main Arduino sketch
├── assets/
│   ├── 3pic1.jpg        # Front view
│   ├── 3pic2.jpg        # Display close-up
│   ├── 3pic3.jpg        # Side angle
│   └── 3pic4.jpg        # Back / wiring
```

---

## Gallery

![Front view](assets/3pic1.jpg)
![Display close-up](assets/3pic2.jpg)
![Side angle](assets/3pic3.jpg)
![Back / wiring](assets/3pic4.jpg)

---

## Credits

- Song: *"Ayiti se"* — Mikaben  
- Course: Creative Embedded Systems, Columbia University, Spring 2026  
- Author: Olivier Estime
