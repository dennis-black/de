---
title: Arduino Mega 2560 & CHH-144 範例
tags: [微處理機實習]

---

# Arduino Mega 2560 & CHH-144 範例

## 繼電器控制 範例 2-2-1 p7
```Arduino=
int RY5V = A4;
void setup(){
  pinMode(RY5V, OUTPUT);
  digitalWrite(RY5V, LOW);
}

void loop(){
  digitalWrite(RY5V, HIGH);
  delay(100);
  digitalWrite(RY5V, LOW);
  delay(1000);
}
```

## 可變電阻控制蜂鳴器的頻率 範例 2-3-2 p10
```Arduino=
int buzzer = A9;
int VR_pin = A0;
int VR_value = 0; 
void setup(){
  pinMode(buzzer, OUTPUT);
  pinMode(VR_pin, INPUT);
}

void loop(){
  VR_value = analogRead(VR_pin);
  digitalWrite(buzzer, HIGH);
  delay(VR_value);
  digitalWrite(buzzer, LOW);
  delay(VR_value);
}
```

## 七段顯示器-顯示4位數 範例 2-4-3 p19
```Arduino=
#define CA1 30
#define CA2 31
#define CA3 32
int delayTime = 1; //延遲4毫秒
byte segs[7] = {2,3,4,5,6,7,8};
byte sSD[10][7] = { //七段顯示器數據，0表示低電阻也就 on，反之1代表 off
// f a b c d e g
  {0,0,0,0,0,0,1}, //0 
  {1,0,0,1,1,1,1}, //1
  {0,0,1,0,0,1,0}, //2
  {0,0,0,0,1,1,0}, //3
  {1,0,0,1,1,0,0}, //4
  {0,1,0,0,1,0,0}, //5
  {0,1,0,0,0,0,0}, //6
  {0,0,0,1,1,1,1}, //7
  {0,0,0,0,0,0,0}, //8
  {0,0,0,0,1,0,0}, //9
};


void setup() {
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  digitalWrite(9, HIGH); //不顯示小數點

  pinMode(CA1, OUTPUT);
  pinMode(CA2, OUTPUT);
  pinMode(CA3, OUTPUT);
  pinMode(A13, OUTPUT);
  digitalWrite(A13, LOW);
}

void loop() {
  for(unsigned int number = 0; number < 10000; number++){
    unsigned long startTime = millis();
    for(unsigned long elapsed = 0; elapsed < 300; elapsed = millis()-startTime){
      lightDigit1(number%10);
      delay(delayTime);
      lightDigit2((number/10)%10);
      delay(delayTime);
      lightDigit3((number/100)%10);
      delay(delayTime);
      lightDigit4((number/1000)%10);
      delay(delayTime);
    }
  }
}

void pickDigit(int x){ //透過 74LS138 解碼器讓第 x 位的七段顯示器亮
  // 參考 手冊 p29 真值表
  digitalWrite(CA1, HIGH);
  digitalWrite(CA2, HIGH);
  digitalWrite(CA3, HIGH);

  switch(x){
    case 1:
      digitalWrite(CA1, LOW);
      digitalWrite(CA2, LOW);
      digitalWrite(CA3, LOW);
      break;
    case 2:
      digitalWrite(CA1, HIGH);
      digitalWrite(CA2, LOW);
      digitalWrite(CA3, LOW);
      break;
    case 3:
      digitalWrite(CA1, LOW);
      digitalWrite(CA2, HIGH);
      digitalWrite(CA3, LOW);
      break;
    case 4:
      digitalWrite(CA1, HIGH);
      digitalWrite(CA2, HIGH);
      digitalWrite(CA3, LOW);
      break;
  }  
}

void lightDigit1(byte number){
  pickDigit(1);
  lightSegments(number);
}

void lightDigit2(byte number){
  pickDigit(2);
  lightSegments(number);
}

void lightDigit3(byte number){
  pickDigit(3);
  lightSegments(number);
}

void lightDigit4(byte number){
  pickDigit(4);
  lightSegments(number);
}

void lightSegments(byte number){
  for(int i = 0; i < 7; i++){
    digitalWrite(segs[i], sSD[number][i]);
  }
}
```

## RGB LED 混光 範例 2-5-1(透過迴圈漸變顔色) p26
```Arduino=
int redPin = 44;
int greenPin = 45;
int bluePin = 46;
int speed = 10;
void setup(){
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
}

void loop(){
  analogWrite(redPin, 255); // 關閉紅色
  analogWrite(greenPin, 255); // 關閉綠色
  analogWrite(bluePin, 255); // 關閉藍色
  for(int i = 0; i < 255; i++){ //紅色從最亮到最暗
    analogWrite(redPin, i);
    delay(speed);
  }
  delay(100);
  for(int i = 0; i < 255; i++){ //綠色從最亮到最暗
    analogWrite(greenPin, i);
    delay(speed);
  }
  delay(100);
    for(int i = 0; i < 255; i++){ //藍色從最亮到最暗
    analogWrite(bluePin, i);
    delay(speed);
  }
  delay(100);
}
```

## 8x8點矩陣顯示器 範例 2-6-1 p31
```Arduino=
#define Ls138_A 30
#define Ls138_B 31
#define Ls138_C 32
#define R0 2
#define R1 3
#define R2 4
#define R3 5
#define R4 6
#define R5 7
#define R6 8
#define R7 9
#define rowSize 8
#define colSize 8
#define delayTime 300
#define data_A {0,0,0,1,1,0,0,0,\
                0,0,1,0,0,1,0,0,\
                0,0,1,0,0,1,0,0,\
                0,1,0,0,0,0,1,0,\
                0,1,1,1,1,1,1,0,\
                0,1,0,0,0,0,1,0,\
                0,1,0,0,0,0,1,0,\
                0,1,0,0,0,0,1,0 }
boolean wordArray[4][rowSize][colSize] = {data_A};
boolean led[rowSize][colSize];
byte rowPin[rowSize] = {R0,R1,R2,R3,R4,R5,R6,R7};
void setup(){
  pinMode(Ls138_A, OUTPUT);
  pinMode(Ls138_B, OUTPUT);
  pinMode(Ls138_C, OUTPUT);
  pinMode(R0, OUTPUT);
  pinMode(R1, OUTPUT);
  pinMode(R2, OUTPUT);
  pinMode(R3, OUTPUT);
  pinMode(R4, OUTPUT);
  pinMode(R5, OUTPUT);
  pinMode(R6, OUTPUT);
  pinMode(R7, OUTPUT);
  clearLed();
  pinMode(A14, OUTPUT);
  digitalWrite(A14, LOW);
}

void loop(){
  wordToLed(0);
  displayLed(led,1000);
}

void wordToLed(int n){
  for(int i = 0; i< rowSize; i++){
    for(int j = 0; j< colSize; j++){
      led[i][j] = wordArray[n][i][j];
    }
  }
}

void clearLed(){
  for(int i = 0; i < rowSize; i++){
    digitalWrite(rowPin[i], LOW);
  }
}

void displayLed(bool led[rowSize][colSize], int continueTime){
  for(int k = 0; k < continueTime; k++){
    for(int i = 0; i < colSize; i++){
      clearLed();
      low_74138pin(i);
      for(int j = 0; j < rowSize; j++){
        if(led[j][i] == 1)
          digitalWrite(rowPin[j], HIGH);
      }
    }
  }
}

void low_74138pin(int num){
  switch(num){
    case 0:
      digitalWrite(Ls138_A, LOW);
      digitalWrite(Ls138_B, LOW);
      digitalWrite(Ls138_C, LOW);
      break;
    case 1:
      digitalWrite(Ls138_A, HIGH);
      digitalWrite(Ls138_B, LOW);
      digitalWrite(Ls138_C, LOW);
      break;
    case 2:
      digitalWrite(Ls138_A, LOW);
      digitalWrite(Ls138_B, HIGH);
      digitalWrite(Ls138_C, LOW);
      break;
    case 3:
      digitalWrite(Ls138_A, HIGH);
      digitalWrite(Ls138_B, HIGH);
      digitalWrite(Ls138_C, LOW);
      break;
    case 4:
      digitalWrite(Ls138_A, LOW);
      digitalWrite(Ls138_B, LOW);
      digitalWrite(Ls138_C, HIGH);
      break;
    case 5:
      digitalWrite(Ls138_A, HIGH);
      digitalWrite(Ls138_B, LOW);
      digitalWrite(Ls138_C, HIGH);
      break;
    case 6:
      digitalWrite(Ls138_A, LOW);
      digitalWrite(Ls138_B, HIGH);
      digitalWrite(Ls138_C, HIGH);
      break;
    case 7:
      digitalWrite(Ls138_A, HIGH);
      digitalWrite(Ls138_B, HIGH);
      digitalWrite(Ls138_C, HIGH);
      break;
  }
}
```

## 4位指撥開關 範例 2-7-1 p37
```Arduino=
int DIPSWbase = 2;
int num = 4;
int DIPSWbase1 = 37; // 第一個指撥開關的 I/O 脚位
int DIPSW1state, DIPSW2state, DIPSW3state, DIPSW4state; //儲存指撥開關的狀態

void setup() {
  Serial.begin(9600);

  for(int i = DIPSWbase; i< DIPSWbase + num; i++){
    pinMode(i, OUTPUT);
  }
  for(int i = DIPSWbase1; i < DIPSWbase1 + num; i++){
    pinMode(i, INPUT_PULLUP);
  }
  pinMode(A15, OUTPUT);
  digitalWrite(A15, LOW);
}

void loop() {
  DIPSW1state = digitalRead(37); // 讀取指撥開關的狀態
  digitalWrite(2, DIPSW1state);  // 將指撥開關狀態寫進對應的led燈
  Serial.print("DIPSW1state: ");
  Serial.println(DIPSW1state);  // 在serial monitor 查看輸出 on = 0; off = 1;

  DIPSW2state = digitalRead(38);
  digitalWrite(3, DIPSW2state);

  DIPSW3state = digitalRead(39);
  digitalWrite(4, DIPSW3state);

  DIPSW4state = digitalRead(40);
  digitalWrite(5, DIPSW4state);
}
```

##  4位按鈕開關 範例 2-8-1 p41
```Arduino=
int BTNbase = 6;
int num = 4;
int BTNbase1 = 33; // 第一個按鈕的 I/O 脚位
int BTN1state, BTN2state, BTN3state, BTN4state; //儲存按鈕的狀態
void setup() {
  Serial.begin(9600);
  for(int i = BTNbase; i < BTNbase + num; i++){
    pinMode(i, OUTPUT);
  }
  for(int i = BTNbase1; i < BTNbase1 + num; i++){
    pinMode(i, INPUT_PULLUP);
  }
  pinMode(A15, OUTPUT);
  digitalWrite(A15, LOW);
}

void loop() {
  BTN1state =  digitalRead(33); // 讀取開關的狀態
  digitalWrite(9, BTN1state); // 將開關狀態寫進對應的led燈
  // Serial.print("BTN1state: ");
  // Serial.println(BTN1state); // 在serial monitor 查看輸出 on = 0; off = 1;

  BTN2state =  digitalRead(34);
  digitalWrite(8, BTN2state);

  BTN3state =  digitalRead(35);
  digitalWrite(7, BTN3state);

  BTN4state =  digitalRead(36);
  digitalWrite(6, BTN4state);
}
```

##  4x4鍵盤 範例 2-9-1 p45
```Arduino=
#include <Keypad.h>
const byte rows = 4;
const byte cols = 4;
char kb[rows][cols] = {
                        {'F','E','D','C'},
                        {'B','3','6','9'},
                        {'A','2','5','8'},
                        {'0','1','4','7'}
                      };
byte rowPins[rows] = {25,24,23,22};
byte colPins[cols] = {29,28,27,26};
Keypad customKeypad = Keypad(makeKeymap(kb), rowPins, colPins, rows, cols);

void setup(){
  Serial.begin(9600);
}

void loop(){
  char customKey = customKeypad.getKey();
  if(customKey){
    Serial.println(customKey);
  }
}
```

##  雙軸搖桿模組 範例 2-11-1 p49
```Arduino=
int joyPinX = A1;
int joyPinY = A2;
int sw = A3;
int value = 0;
int xzero = 0;
int yzero = 0;
int swState = 0;
void setup(){
  Serial.begin(9600);
  pinMode(sw, INPUT_PULLUP);
  yzero = analogRead(joyPinY);
  xzero = analogRead(joyPinX);
}

void loop(){
  int x,y,value;
  value = analogRead(joyPinX);
  x = value - xzero;
  value = analogRead(joyPinY);
  y = value - yzero;
  swState = digitalRead(sw);
  Serial.print("X = ");
  Serial.print(x);
  Serial.print("; Y = ");
  Serial.print(y);
  Serial.print("; SW = ");
  Serial.print(swState);  
  Serial.println();
  delay(100);
}
```

##   LCD液晶模組 範例 2-12-1 p55
```Arduino=
#include <LiquidCrystal.h>
LiquidCrystal lcd(49,48,47,43,42,41);
void setup(){
  lcd.begin(16, 2);
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("How are you?");
  lcd.setCursor(0,1);
  lcd.print("LCD testing!");
}

void loop(){
  lcd.noDisplay();
  delay(500);
  lcd.display();
  delay(500);
}
```

##   LCD與4x4鍵盤 範例 2-12-2 p56
```Arduino=
#include <Keypad.h>
#include <LiquidCrystal.h>
LiquidCrystal lcd(49,48,47,43,42,41);
const byte rows = 4;
const byte cols = 4;
char kb[rows][cols] = {
                        {'F','E','D','C'},
                        {'B','3','6','9'},
                        {'A','2','5','8'},
                        {'0','1','4','7'}
                      };
byte rowPins[rows] = {25,24,23,22};
byte colPins[cols] = {29,28,27,26};
Keypad customKeypad = Keypad(makeKeymap(kb), rowPins, colPins, rows, cols);

void setup(){
  lcd.begin(16, 2);
  lcd.print("KEY IN: ");
}

void loop(){
  lcd.setCursor(7, 0);
  char customKey = customKeypad.getKey();
  if(customKey){
    lcd.print(customKey);
  }
}
```