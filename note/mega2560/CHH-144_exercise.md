---
title: Arduino Mega 2560 & CHH-144 - 甲班習題
tags: [微處理機實習]

---

## 由左而右跑馬燈，顯示Hello World (改成你的英文名字)
```c
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
  #define row_size 8
  #define col_size 8
  #define delay_time 300
  // Letter A
// Letter A
#define data_A {\
  0,0,0,1,1,0,0,0,\
  0,0,1,0,0,1,0,0,\
  0,0,1,0,0,1,0,0,\
  0,1,1,1,1,1,1,0,\
  0,1,0,0,0,0,1,0,\
  0,1,0,0,0,0,1,0,\
  1,1,0,0,0,0,1,1,\
  0,0,0,0,0,0,0,0\
}

// Letter B
#define data_B {\
  0,1,1,1,1,1,0,0,\
  0,1,0,0,0,0,1,0,\
  0,1,0,0,0,0,1,0,\
  0,1,1,1,1,1,0,0,\
  0,1,0,0,0,0,1,0,\
  0,1,0,0,0,0,1,0,\
  0,1,1,1,1,1,0,0,\
  0,0,0,0,0,0,0,0\
}

// Letter C
#define data_C { \
  0,0,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,1,\
  0,0,1,1,1,1,1,0\
}

// Letter D
#define data_D { \
  0,1,1,1,1,1,1,0,\
  0,1,0,0,0,0,1,0,\
  0,1,0,0,0,0,0,1,\
  0,1,0,0,0,0,0,1,\
  0,1,0,0,0,0,0,1,\
  0,1,0,0,0,0,0,1,\
  0,1,0,0,0,0,1,0,\
  0,1,1,1,1,1,1,0\
}

// Letter E
#define data_E { \
  0,1,1,1,1,1,1,1,\
  0,1,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,0,\
  0,1,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,0,\
  0,1,1,1,1,1,1,1,\
  0,0,0,0,0,0,0,0\
}

// Letter F
#define data_F { \
  0,1,1,1,1,1,1,1,\
  0,1,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,0,\
  0,1,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,0,\
  0,0,0,0,0,0,0,0\
}

// Letter G
#define data_G { \
  0,0,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,1,1,1,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  0,1,0,0,0,0,0,1,\
  0,0,1,1,1,1,1,0\
}

// Letter H
#define data_H { \
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,1,1,1,1,1,1,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  0,0,0,0,0,0,0,0\
}

// Letter I
#define data_I { \
  0,0,1,1,1,1,1,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,1,1,1,1,1,0,\
  0,0,0,0,0,0,0,0\
}

// Letter J
#define data_J { \
  0,0,1,1,1,1,1,1,\
  0,0,0,0,0,1,1,0,\
  0,0,0,0,0,1,1,0,\
  0,0,0,0,0,1,1,0,\
  0,0,0,0,0,1,1,0,\
  1,0,0,0,0,1,0,0,\
  0,1,1,1,1,0,0,0,\
  0,0,0,0,0,0,0,0\
}

// Letter K
#define data_K { \
  1,0,0,0,0,0,1,0,\
  1,0,0,0,0,1,0,0,\
  1,0,0,0,1,0,0,0,\
  1,0,0,1,0,0,0,0,\
  1,0,1,0,0,0,0,0,\
  1,1,0,1,0,0,0,0,\
  1,0,0,0,1,0,0,0,\
  0,0,0,0,0,0,0,0\
}

// Letter L
#define data_L { \
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,1,1,1,1,1,1,1,\
  0,0,0,0,0,0,0,0\
}

// Letter M
#define data_M { \
  1,0,0,0,0,0,0,1,\
  1,1,0,0,0,0,1,1,\
  1,0,1,0,0,1,0,1,\
  1,0,0,1,1,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  0,0,0,0,0,0,0,0\
}

// Letter N
#define data_N { \
  1,0,0,0,0,0,0,1,\
  1,1,0,0,0,0,0,1,\
  1,0,1,0,0,0,0,1,\
  1,0,0,1,0,0,0,1,\
  1,0,0,0,1,0,0,1,\
  1,0,0,0,0,1,0,1,\
  1,0,0,0,0,0,1,1,\
  0,0,0,0,0,0,0,0\
}


// Letter O
#define data_O { \
  0,0,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,1,\
  0,0,1,1,1,1,1,0\
}

// Letter P
#define data_P { \
  0,1,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,1,\
  0,1,0,0,0,0,0,1,\
  0,1,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,0,\
  0,1,0,0,0,0,0,0,\
  0,0,0,0,0,0,0,0\
}

// Letter Q
#define data_Q { \
  0,0,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  1,0,0,0,0,0,0,0,\
  0,1,0,0,0,1,0,1,\
  0,0,1,1,1,1,1,0\
}

// Letter R
#define data_R { \
  0,1,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,1,\
  0,1,0,0,0,0,0,1,\
  0,1,1,1,1,1,1,0,\
  0,1,0,0,1,0,0,0,\
  0,1,0,0,0,1,0,0,\
  0,1,0,0,0,0,1,0,\
  0,0,0,0,0,0,0,0\
}

// Letter S
#define data_S { \
  0,0,1,1,1,1,1,0,\
  0,1,0,0,0,0,0,1,\
  0,1,0,0,0,0,0,0,\
  0,0,1,1,1,1,1,0,\
  0,0,0,0,0,0,0,1,\
  0,0,0,0,0,0,0,1,\
  0,1,0,0,0,0,1,0,\
  0,0,1,1,1,1,0,0\
}

// Letter T
#define data_T { \
  0,1,1,1,1,1,1,1,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,0,0,0,0,0\
}

// Letter U
#define data_U { \
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  0,1,0,0,0,0,0,1,\
  0,0,1,1,1,1,1,0\
}

// Letter V
#define data_V { \
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  0,1,0,0,0,0,1,0,\
  0,1,0,0,0,0,1,0,\
  0,0,1,0,0,1,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,0,0,0,0,0\
}

// Letter W
#define data_W { \
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,0,0,0,0,1,\
  1,0,0,1,1,0,0,1,\
  0,1,1,0,0,1,1,0,\
  0,0,0,0,0,0,0,0\
}

// Letter X
#define data_X { \
  1,0,0,0,0,0,0,1,\
  0,1,0,0,0,0,1,0,\
  0,0,1,0,0,1,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,1,0,0,1,0,0,\
  0,1,0,0,0,0,1,0,\
  1,0,0,0,0,0,0,1\
}

// Letter Y
#define data_Y { \
  1,0,0,0,0,0,0,1,\
  0,1,0,0,0,0,1,0,\
  0,0,1,0,0,1,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,1,1,0,0,0,\
  0,0,0,0,0,0,0,0\
}

// Letter Z
#define data_Z { \
  1,1,1,1,1,1,1,1,\
  0,0,0,0,0,0,1,0,\
  0,0,0,0,0,1,0,0,\
  0,0,0,0,1,0,0,0,\
  0,0,0,1,0,0,0,0,\
  0,0,1,0,0,0,0,0,\
  0,1,0,0,0,0,0,0,\
  1,1,1,1,1,1,1,1\
}

  boolean word_array[36][row_size][col_size] = {data_A,data_B,data_C,data_D,data_E,
                                                data_F,data_G,data_H,data_I,data_J,
                                                data_K,data_L,data_M,data_N,data_O,
                                                data_P,data_Q,data_R,data_S,data_T,
                                                data_U,data_V,data_W,data_X,data_Y,data_Z};
  boolean led[row_size][col_size];
  byte row_pin [row_size] ={R0, R1, R2, R3, R4, R5, R6, R7};
  int namestring[6]={3,4,13,13,8,18 };  
void setup() {
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
  clear_led();
  pinMode(A14, OUTPUT);
  digitalWrite(A14, LOW);
}

void loop() {
  for(int i=0; i < 6; i++){
    word_to_led(namestring[i]);
    display_led(led, 100);
  }
}

void word_to_led(int n){
  for(int i = 0; i< row_size; i++){
    for(int j = 0; j< col_size; j++){
      led[i][j]= word_array[n][j][i];
    }
  }
}
void clear_led(){
  for(int i = 0; i< row_size; i++){
    digitalWrite(row_pin[i], LOW);
  }
}
void display_led(boolean led[row_size][col_size], int continue_time){
  for(int moves = 0; moves <6; moves++){
    for (int k = 0; k< continue_time; k++){
      for(int i = 0; i< col_size; i++){
        clear_led();
        low_74138pin(i);
        for(int j = 0; j< row_size; j++){
          if(i+ moves <8){
            if (led[i+moves][j]==1){
              digitalWrite(row_pin[j], HIGH);
            }
          }
        }
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
---
## 以4位按紐分別做為LED四位的加1減1按紐，利用4位指撥開關向上為加、向下為減。其中若0009，個位數再加1會進位變0010
- 有接脚位衝突的問題
  ```c
  int num = 4;
  int DIPSWbase1 = 37, BTNbase1 = 33; // 第一個按鈕以及指撥開關的 I/O 脚位
  int DIPSW1state, DIPSW2state, DIPSW3state, DIPSW4state; //儲存指撥開關的狀態
  int BTN1state, BTN2state, BTN3state, BTN4state; //儲存按鈕的狀態
  int displayVal = 0; //記錄七段顯示器要顯示的值
  int adjustVal = 0;//要調整的值
  #define CA1 30
  #define CA2 31
  #define CA3 32
  int delayTime = 1; //延遲4毫秒
  byte segs[7] = {2,3,4,5,6,7,8};
  // byte segs[7] = {11,12,13,14,15,16,17};
  byte sSD[10][7] = { //七段顯示器數據
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
    Serial.begin(9600);
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

    for(int i = BTNbase1; i < BTNbase1 + num; i++){
      pinMode(i, INPUT_PULLUP);
    }
    
    for(int i = DIPSWbase1; i < DIPSWbase1 + num; i++){
      pinMode(i, INPUT_PULLUP);
    }
    display7Seg(displayVal);
  }

  void loop() {

    //--------------------------------處理指撥開關
    DIPSW1state = digitalRead(37);
    digitalWrite(2, DIPSW1state);
    Serial.print("DIPSW1state: ");
    Serial.println(DIPSW1state);  // 在serial monitor 查看輸出 on = 0; off = 1;

    DIPSW2state = digitalRead(38);
    digitalWrite(3, DIPSW2state);

    DIPSW3state = digitalRead(39);
    digitalWrite(4, DIPSW3state);

    DIPSW4state = digitalRead(40);
    digitalWrite(5, DIPSW4state);

    //--------------------------------處理按鈕
    BTN1state =  digitalRead(33);
    digitalWrite(9, BTN1state);
    // Serial.print("BTN1state: ");
    // Serial.println(BTN1state); // 在serial monitor 查看輸出 on = 0; off = 1;

    BTN2state =  digitalRead(34);
    digitalWrite(8, BTN2state);

    BTN3state =  digitalRead(35);
    digitalWrite(7, BTN3state);

    BTN4state =  digitalRead(36);
    digitalWrite(6, BTN4state);


    //--------------------------------處理個別位數加減問題
    if (BTN4state == 0) { // 當按鈕4被按下 (個位數)
      adjustVal = (DIPSW1state == 0) ? 1 : -1; // 根據DIPSW4判斷加減
      displayVal += adjustVal;
      if (displayVal < 0) {
        displayVal += 10000; // 如果小於0，環繞到9999
      } else if (displayVal > 9999) {
        displayVal %= 10000; // 如果超過9999，環繞到0
      }
    }

    if (BTN3state == 0) { // 當按鈕3被按下 (十位數)
      adjustVal = (DIPSW2state == 0) ? 10 : -10; // 根據DIPSW3判斷加減
      displayVal += adjustVal;
      if (displayVal < 0) {
        displayVal += 10000; // 如果小於0，環繞到9999
      } else if (displayVal > 9999) {
        displayVal %= 10000; // 如果超過9999，環繞到0
      }
    }

    if (BTN2state == 0) { // 當按鈕2被按下 (百位數)
      adjustVal = (DIPSW3state == 0) ? 100 : -100; // 根據DIPSW2判斷加減
      displayVal += adjustVal;
      if (displayVal < 0) {
        displayVal += 10000; // 如果小於0，環繞到9999
      } else if (displayVal > 9999) {
        displayVal %= 10000; // 如果超過9999，環繞到0
      }
    }

    if (BTN1state == 0) { // 當按鈕1被按下 (千位數)
      adjustVal = (DIPSW4state == 0) ? 1000 : -1000; // 根據DIPSW1判斷加減
      displayVal += adjustVal;
      if (displayVal < 0) {
        displayVal += 10000; // 如果小於0，環繞到9999
      } else if (displayVal > 9999) {
        displayVal %= 10000; // 如果超過9999，環繞到0
      }
    }

    Serial.print("4-digit val: ");
    Serial.println(displayVal);

    //--------------------------------處理將displayVal在4位7段顯示器上輸出
    display7Seg(displayVal);
    delay(200);
  }

  void display7Seg(int number) {
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

  void pickDigit(int x){ //用來選定某個位數的顯示器
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
    delay(1);
  }


  ```

## 實作紅綠燈小綠人，使用按鈕開關，從右到左依序為紅黃綠，按下按鈕後，給出特定動作
```c
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
  #define row_size 8
  #define col_size 8
  #define delay_time 300
  int BASE1 = 33;
  int DIPSW1state;
  int DIPSW2state;
  int DIPSW3state;
  int DIPSW4state;
// Number 0
#define data_Arrow { \
   0,0,0,1,1,1,0,0, \
   0,0,1,1,1,1,1,0, \
   0,1,1,1,1,1,1,1, \
   1,1,1,1,1,0,0,0, \
   1,1,1,1,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
}
#define data_empty { \
  0,0,0,0,1,1,0,0,\
  0,0,0,1,1,1,1,0,\
  0,0,0,0,1,1,0,0,\
  0,0,1,1,1,1,0,0,\
  0,1,0,1,1,0,1,0,\
  0,0,0,1,1,0,0,0,\
  0,0,1,0,0,1,0,0,\
  0,1,1,0,0,1,1,0,\
}
#define data_monster { \
   0,0,0,1,0,0,0,0, \
   0,0,1,1,1,0,0,0, \
   0,1,1,1,1,1,0,0, \
   1,1,1,1,1,1,1,0, \
   0,0,0,1,0,0,0,0, \
   0,0,0,1,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
}
#define data_s { \
   0,0,0,1,0,0,0,0, \
   0,0,1,1,1,0,0,0, \
   0,1,1,1,1,1,0,0, \
   1,1,1,1,1,1,1,0, \
   0,0,0,1,0,0,0,0, \
   0,0,0,1,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
}
#define data_rock { \
   0,0,0,1,0,0,0,0, \
   0,0,1,1,1,0,0,0, \
   0,1,1,1,1,1,0,0, \
   1,1,1,1,1,1,1,0, \
   0,0,0,0,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
}
#define data_papper { \
   0,0,0,1,1,0,0,0, \
   0,0,1,0,0,1,0,0, \
   0,1,0,0,0,0,1,0, \
   0,1,0,0,0,0,1,0, \
   0,0,1,0,0,1,0,0, \
   0,0,0,1,1,0,0,0, \
   0,0,0,0,0,0,0,0, \
   0,0,0,0,0,0,0,0, \
}


  boolean word_array[36][row_size][col_size] = {data_empty, data_Arrow,data_monster, data_s, data_papper, data_rock};
  boolean led[row_size][col_size];
  byte row_pin [row_size] ={R0, R1, R2, R3, R4, R5, R6, R7};
void setup() {
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
  clear_led();
  pinMode(A14, OUTPUT);
  digitalWrite(A14, LOW);
  for (int i= BASE1; i< BASE1+ 4; i++){
    pinMode(i, INPUT_PULLUP);
  }
}
int hex=0;
void loop() {
  hex=0;
  DIPSW1state = digitalRead(33);
  DIPSW2state = digitalRead(34);
  DIPSW3state = digitalRead(35);
  DIPSW4state = digitalRead(36);
  if(DIPSW1state== LOW){
    hex=1;
  }
  if(DIPSW2state== LOW){
    hex=2;
  }
  if(DIPSW3state== LOW){
    hex=3;
  }
  if(DIPSW4state== LOW){
    hex=4;
  }
  if (hex == 3){
    word_to_led(hex);
    display_led(led, 500, hex);
   
    word_to_led(hex+1);
    display_led(led, 500, hex);
   
    word_to_led(hex+2);
    display_led(led, 500, hex);
  }
  else{
    word_to_led(hex);
    display_led(led, 100, hex);
  }
 
}

void word_to_led(int n){
  for(int i = 0; i< row_size; i++){
    for(int j = 0; j< col_size; j++){
      led[i][j]= word_array[n][j][i];
    }
  }
}
void clear_led(){
  for(int i = 0; i< row_size; i++){
    digitalWrite(row_pin[i], LOW);
  }
}
void display_led(boolean led[row_size][col_size], int continue_time, int hex){
  if (hex <= 1){
  for(int moves = 0; moves <8; moves++){
    for (int k = 0; k< continue_time; k++){
      for(int i = 0; i< col_size; i++){
        clear_led();
        low_74138pin(i);
        for(int j = 0; j< row_size; j++){
          if(i- moves >=0){
            if (led[i-moves][j]==1){
              digitalWrite(row_pin[j], HIGH);
            }
          }
        }
      }  
    }
  }
  }else if(hex == 2){
    for(int moves = 0; moves <8; moves++){
    for (int k = 0; k< continue_time; k++){
      for(int i = 0; i< col_size; i++){
        clear_led();
        low_74138pin(i);
        for(int j = 0; j< row_size; j++){
          if(j- moves >=0){
            if (led[i][j-moves]==1){
              digitalWrite(row_pin[j], HIGH);
            }
          }
        }
      }  
    }
  }
  }else{
 
    for (int k = 0; k< continue_time; k++){
      for(int i = 0; i< col_size; i++){
        clear_led();
        low_74138pin(i);
        for(int j = 0; j< row_size; j++){
         
            if (led[i][j]==1){
              digitalWrite(row_pin[j], HIGH);
            }
         
        }
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

## 8x8點矩陣亮㇐個燈，利用雙軸搖桿可控制上下左右
```c
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

boolean data_A[8][8] = {
  {1,0,0,0,0,0,0,0},  // 初始點在左上角
  {0,0,0,0,0,0,0,0},
  {0,0,0,0,0,0,0,0},
  {0,0,0,0,0,0,0,0},
  {0,0,0,0,0,0,0,0},
  {0,0,0,0,0,0,0,0},
  {0,0,0,0,0,0,0,0},
  {0,0,0,0,0,0,0,0}
                        };

boolean led[rowSize][colSize];
byte rowPin[rowSize] = {R0,R1,R2,R3,R4,R5,R6,R7};

int joyPinX = A1;
int joyPinY = A2;
int sw = A3;
int xzero = 0;
int yzero = 0;
int swState = 0;

int point[2] = {0, 0};

void setup(){
  Serial.begin(9600);
  pinMode(sw, INPUT_PULLUP);
  yzero = analogRead(joyPinY);
  xzero = analogRead(joyPinX);
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
  int x, y, value;
  
  value = analogRead(joyPinX);
  x = value - xzero;
  value = analogRead(joyPinY);
  y = value - yzero;
  
  if (y < -100) {
    point[1] = (point[1] + 1) % colSize;
    delay(200); 
  }
  if (y > 100) {
    point[1] = (point[1] - 1 + colSize) % colSize;
    delay(200);
  }
  if (x > 100) {
    point[0] = (point[0] + 1) % rowSize;
    delay(200);
  }
  if (x < -100) {
    point[0] = (point[0] - 1 + rowSize) % rowSize;
    delay(200);
  }
  
  // 清空 data_A 並更新新位置
  resetDataA();
  data_A[point[0]][point[1]] = 1;  // 在新位置設置點

  updateLed();

  displayLed(led, 1);
}

void resetDataA() {
  for (int i = 0; i < rowSize; i++) {
    for (int j = 0; j < colSize; j++) {
      data_A[i][j] = 0;
    }
  }
}

void updateLed() {
  for (int i = 0; i < rowSize; i++) {
    for (int j = 0; j < colSize; j++) {
      led[i][j] = data_A[i][j];
    }
  }
}

void clearLed(){
  for(int i = 0; i < rowSize; i++){
    digitalWrite(rowPin[i], LOW);
  }
}

void displayLed(boolean led[rowSize][colSize], int continueTime){
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

## 利用數字鍵與LCD做㇐個加減乘除的計算機
```c
#include <Keypad.h>
#include <LiquidCrystal.h>

// 初始化LCD，使用 Arduino 的 49,48,47,43,42,41 來控制
LiquidCrystal lcd(49,48,47,43,42,41);

const byte rows = 4;
const byte cols = 4;

// 鍵盤的映射
char kb[rows][cols] = {
                        {'F','E','D','C'},
                        {'B','3','6','9'},
                        {'A','2','5','8'},
                        {'0','1','4','7'}
                      };

byte rowPins[rows] = {25,24,23,22};
byte colPins[cols] = {29,28,27,26};

// 初始化 Keypad
Keypad customKeypad = Keypad(makeKeymap(kb), rowPins, colPins, rows, cols);

// 全局變量來保存計算數據
String input1 = "";  // 儲存第一個數字
String input2 = "";  // 儲存第二個數字
char operation = 0;  // 儲存運算符
bool isSecondInput = false; // 判斷是否正在輸入第二個數字

void setup(){
  lcd.begin(16, 2);  // 初始化 LCD
  lcd.clear();
}

void loop(){
  char customKey = customKeypad.getKey();  // 獲取按鍵輸入

  if(customKey){
    if (customKey >= '0' && customKey <= '9') {  // 輸入數字
      if (isSecondInput) {
        input2 += customKey;  // 將數字追加到第二個輸入中
        lcd.print(customKey);
      } else {
        input1 += customKey;  // 將數字追加到第一個輸入中
        lcd.print(customKey);
      }
    } else if (customKey == 'A' || customKey == 'E' || customKey == 'D' || customKey == 'F') {  // 選擇運算符
      if (!isSecondInput && input1.length() > 0) {  // 確保已經有第一個數字
        operation = customKey;
        isSecondInput = true;  // 開始輸入第二個數字
        lcd.setCursor(1, 0);  // 將光標移到第二行
        char c;
        if (customKey == 'A')
          c = '+';
        else if (customKey == 'E')
          c = '-';
        else if (customKey == 'F')
          c = '*';
        else
          c = '/';
        lcd.print(c);
      }
    } else if (customKey == 'C') {  // 清空按鈕
      clearAll();
    } else if (customKey == 'B') {  // 等號，進行計算
      if (input1.length() > 0 && input2.length() > 0 && operation != 0) {
        calculateResult();
      }
    }
  }
}

// 清除所有輸入和顯示
void clearAll() {
  input1 = "";
  input2 = "";
  operation = 0;
  isSecondInput = false;
  lcd.clear();  // 清空 LCD 顯示
}

// 計算結果並顯示
void calculateResult() {
  float num1 = input1.toFloat();
  float num2 = input2.toFloat();
  float result = 0;

  switch (operation) {
    case 'A':  // 加法
      result = num1 + num2;
      break;
    case 'E':  // 減法
      result = num1 - num2;
      break;
    case 'D':  // 除法
      if (num2 != 0) {
        result = num1 / num2;
      } else {
        lcd.clear();
        lcd.print("Err: Div by 0");  // 防止除以0
        delay(2000);  // 顯示2秒
        clearAll();  // 清空顯示
        return;
      }
      break;
    case 'F':  // 乘法
      result = num1 * num2;
      break;
  }

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(result);  // 顯示計算結果
  delay(2000);  // 停留2秒
  clearAll();  // 清空以便重新輸入
}
```

## 按鍵對應到七段顯示器，並輸入密碼1450，若輸入正確RGB LED亮綠燈，反之亮紅燈。按下C清除(七段顯示不亮)
- 7段顯示器在輸入之後會顯示跑到最左邊，也就是不管輸入幾位數雖然看得到數字的殘影，但是到最後都會只顯示千位數
  ```c
  #include <Keypad.h>

  const byte rows = 4;
  const byte cols = 4;
  char kb[rows][cols] = {
                          {'F','E','D','C'},
                          {'B','3','6','9'},
                          {'A','2','5','8'},
                          {'0','1','4','7'}
                        };
  byte rowPins[rows] = {25, 24, 23, 22};
  byte colPins[cols] = {29, 28, 27, 26};
  Keypad customKeypad = Keypad(makeKeymap(kb), rowPins, colPins, rows, cols);

  #define CA1 30
  #define CA2 31
  #define CA3 32
  #define RED_PIN 44
  #define GREEN_PIN 45
  #define BLUE_PIN 46

  int delayTime = 10; // Set to a more visible delay
  byte segs[7] = {2, 3, 4, 5, 6, 7, 8};
  byte sSD[10][7] = {
    {0, 0, 0, 0, 0, 0, 1}, //0 
    {1, 0, 0, 1, 1, 1, 1}, //1
    {0, 0, 1, 0, 0, 1, 0}, //2
    {0, 0, 0, 0, 1, 1, 0}, //3
    {1, 0, 0, 1, 1, 0, 0}, //4
    {0, 1, 0, 0, 1, 0, 0}, //5
    {0, 1, 0, 0, 0, 0, 0}, //6
    {0, 0, 0, 1, 1, 1, 1}, //7
    {0, 0, 0, 0, 0, 0, 0}, //8
    {0, 0, 0, 0, 1, 0, 0}, //9
  };

  String enteredCode = "";  // Store entered password
  String correctCode = "1450";  // Correct password

  void setup() {
    Serial.begin(9600);

    // Set segment pins as output
    for (int i = 2; i <= 8; i++) {
      pinMode(i, OUTPUT);
    }
    pinMode(9, OUTPUT);
    digitalWrite(9, HIGH); // Turn off decimal point

    // Set common anode pins as output
    pinMode(CA1, OUTPUT);
    pinMode(CA2, OUTPUT);
    pinMode(CA3, OUTPUT);

    pinMode(A13, OUTPUT);
    digitalWrite(A13, LOW);

    // Set RGB pins as output
    pinMode(RED_PIN, OUTPUT);
    pinMode(GREEN_PIN, OUTPUT);
    pinMode(BLUE_PIN, OUTPUT);

    resetDisplay();
    turnOffRGB();
  }

  void loop() {
    showNumber(enteredCode.toInt());
    char customKey = customKeypad.getKey();
    if (customKey) {
      if (customKey == 'C') {
        // Clear display
        enteredCode = "";
        resetDisplay();
        turnOffRGB();
      } else if (isdigit(customKey)) {
        // Handle digit input
        enteredCode += customKey;
        int currentLength = enteredCode.length();
        if (currentLength <= 4) {
          showNumber(enteredCode.toInt());
        }

        if (enteredCode.length() == 4) {
          checkCode();  // Check the entered password
        }
      }
    }
  }

  void checkCode() {
    if (enteredCode == correctCode) {
      turnGreen(); // Correct password
    } else {
      turnRed(); // Incorrect password
    }
  }

  // Display the entered number
  void showNumber(int number) {
    unsigned long startTime = millis();
    for (unsigned long elapsed = 0; elapsed < 300; elapsed = millis() - startTime) {
      lightDigit1(number % 10);
      delay(delayTime);
      lightDigit2((number / 10) % 10);
      delay(delayTime);
      lightDigit3((number / 100) % 10);
      delay(delayTime);
      lightDigit4((number / 1000) % 10);
      delay(delayTime);
    }
  }

  void resetDisplay() {
    // Clear display
    for (int i = 0; i < 4; i++) {
      pickDigit(i + 1);
      for (int j = 0; j < 7; j++) {
        digitalWrite(segs[j], HIGH);  // Turn off display
      }
    }
  }

  void pickDigit(int x){
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

  void lightDigit1(byte number) {
    pickDigit(1);
    lightSegments(number);
  }

  void lightDigit2(byte number) {
    pickDigit(2);
    lightSegments(number);
  }

  void lightDigit3(byte number) {
    pickDigit(3);
    lightSegments(number);
  }

  void lightDigit4(byte number) {
    pickDigit(4);
    lightSegments(number);
  }

  void lightSegments(byte number) {
    for (int i = 0; i < 7; i++) {
      digitalWrite(segs[i], sSD[number][i]);
    }
  }

  void turnOffRGB() {
    analogWrite(RED_PIN, 255);   // Turn off red
    analogWrite(GREEN_PIN, 255); // Turn off green
    analogWrite(BLUE_PIN, 255);  // Turn off blue
  }

  void turnRed() {
    analogWrite(RED_PIN, 0);   // Turn on red
    analogWrite(GREEN_PIN, 255); // Turn off green
    analogWrite(BLUE_PIN, 255);  // Turn off blue
  }

  void turnGreen() {
    analogWrite(RED_PIN, 255);   // Turn off red
    analogWrite(GREEN_PIN, 0);   // Turn on green
    analogWrite(BLUE_PIN, 255);  // Turn off blue
  }

  ```
