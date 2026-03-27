---
title: 실전 압축 빔모션 (메모용)
description: 실압빔
comments: true
---
## TIP

- vim의 거의 모든 커맨드는 **숫자를 앞에 입력**해 **반복실행**할 수 있다.

??? example
	<kbd>8</kbd><kbd>j</kbd> : 아래로 8칸 이동

- 상당수의 **edit 모션**은 **move 모션**과 조합해 사용할 수 있다.

??? example
	<kbd>d</kbd><kbd>j</kbd> : 현재 커서부터 아래줄까지 삭제

- 인자를 받는 모션의 경우 **인자 없이 모션을 연속 두 번** 입력했을 때 기본명령이 있다.

??? example
	<kbd>d</kbd><kbd>d</kbd> : 커서가 위치한 라인 삭제

---

## Basic

### move

<kbd>h</kbd>/<kbd>j</kbd>/<kbd>k</kbd>/<kbd>l</kbd> : 각각 좌/하/상/우 이동

### edit

<kbd>x</kbd> : 현재 커서에 위치한 글자 삭제

### insert

<kbd>i</kbd>/<kbd>a</kbd> : 현재 커서 앞/뒤에서 insert 모드로 변경

<kbd>I</kbd>/<kbd>A</kbd> : 현재 라인 맨앞/뒤에서 insert 모드로 변경

### visual

<kbd>v</kbd> : visual 모드로 변경

### search

<kbd>/</kbd> : 문자열 검색

??? example
	<kbd>/</kbd> ```[regex]``` : [regex] 가 포함된 문자열을 하이라이팅 해줌. enter를 누르면 커서를 이동해줌 (<kbd>n</kbd> 으로 다음단어, <kbd>N</kbd> 으로 이전 단어 탐색)

---

## Elementary

### move

<kbd>0</kbd>/<kbd>$</kbd> : 현재 라인 맨 앞/뒤 지점으로 이동

<kbd>w</kbd>/<kbd>b</kbd> : 다음/이전 단어 시작위치로 이동

### edit

<kbd>d</kbd> : 삭제 (삭제된 부분은 클립보드로 복사된다)

??? example
	<kbd>d</kbd><kbd>d</kbd> : 커서가 위치한 라인 삭제 (<kbd>2</kbd><kbd>d</kbd><kbd>d</kbd> : 커서가 위치한 라인부터 2줄 삭제)
	
	<kbd>d</kbd><kbd>w</kbd> : 커서가 위치한 부분부터 다음 단어 시작지점까지 삭제

<kbd>y</kbd> : 복사

??? example
	<kbd>y</kbd><kbd>y</kbd> : 커서가 위치한 라인 복사
	
	<kbd>y</kbd><kbd>w</kbd> : 다음 단어 시작위치까지 복사

<kbd>p</kbd> : 현재 커서 위치 뒤에 붙여넣기

### insert

<kbd>o</kbd>/<kbd>O</kbd> : 현재 커서 바로 아래/위줄에 빈 줄을 생성하고 그 위치로 이동해 insert 모드로 변경


---

## Intermediate

### move

<kbd>G</kbd>/<kbd>g</kbd><kbd>g</kbd> : 문서 맨 마지막/처음으로 이동

??? tip
	숫자키를 앞에 입력해 해당 라인으로 이동 할 수 있다.
	
	ex) <kbd>9</kbd><kbd>G</kbd> : 9번 라인으로 이동

<kbd>%</kbd> : 대응되는 괄호가 있는 곳으로 이동

### edit

<kbd>></kbd> : indent 하나 추가 (<kbd><</kbd> : indent 하나 제거)

??? example
	<kbd>></kbd><kbd>></kbd> : 현재 커서 라인 맨앞에 indentation 추가 (<kbd>></kbd><kbd>></kbd> : 현재 커서 라인 맨 앞에서 indent 한번 제거)
	
	주의) <kbd>7</kbd><kbd>></kbd><kbd>></kbd> : 7번 <kbd>tab</kbd> 을 입력하는게 아닌 현재 커서부터 7줄 아래까지 입력해준다.

<kbd>u</kbd>/<kbd>^</kbd><kbd>r</kbd> : undo/redo

---

## Advanced

### edit

<kbd>z</kbd><kbd>z</kbd> : 현재 커서 위치가 가운데로 오도록 라인 정렬

<kbd>m</kbd></kbd>/<kbd>'</kbd> : 마크 표시 / 마크로 이동

??? example
	<kbd>m</kbd><kbd>a</kbd> : 현재 커서가 위치한 라인에 a라는 이름으로 마킹 (아무 알파벳이나 가능)
	
	<kbd>'</kbd><kbd>a</kbd> : a라는 마킹이 있는 라인으로 이동
	
	<kbd>'</kbd><kbd>'</kbd> : 점프하기 전으로 되돌아가기

<kbd>q</kbd>/<kbd>@</kbd> : 커맨드 기록 / 실행

??? example
	<kbd>q</kbd><kbd>b</kbd> : b 라는 이름으로 커맨드 기록 시작 (아무 알파벳이나 가능, 이후 <kbd>q</kbd>를 입력할때까지 한 행동을 저장)
	
	<kbd>@</kbd><kbd>b</kbd> : b 커맨드 실행
	
	<kbd>@</kbd><kbd>@</kbd> : 가장 최근에 실행된 커맨드 재실행
	
	<kbd>6</kbd><kbd>@</kbd><kbd>b</kbd> 과 같은 형식으로 b 커맨드를 6번 반복실행할 수 있다.

### command

<kbd>:</kbd> ```s/[regex1]/[regex2]``` : 현재 라인에서 [regex1]를 [regex2]로 변경 (s 앞에 범위 지정 가능, 맨 뒤에 옵션 선택 가능, 기본적으로 각 줄에서 제일 처음 찾은것만 변경)

??? example 
	<kbd>:</kbd> ```$s/hi/hello``` : 모든 라인에서 hi를 hello로 바꿈
	
	<kbd>:</kbd> ```'<'>s/old/new``` : (visual로 선택 후) 선택한 라인들에서 old를 new로 바꿈
	
	<kbd>:</kbd> ```6,7s/bad/good``` : 6번 라인부터 7번 라인들에서 bad를 good으로 바꿈
	
	<kbd>:</kbd> ```s/opt/ion/[g/c/i/e]``` : 현재 라인에서 opt를 ion으로 바꿈 (g: 라인 내에서 찾은 부분 전부 대체, c: 바꾸기 전 확인, i: 대소문자 구분 없이, e: 에러 무시 (기본적으로 대체할 문자를 못찾으면 에러남, 매크로용 옵션))

<kbd>:</kbd> ```norm``` : normal 모드 명령어 실행

??? example
	<kbd>:</kbd> ```5,9norm A;``` : 5번째 줄부터 9번째 줄까지 <kbd>A</kbd><kbd>;</kbd> 실행 (맨 뒤에 ```;``` 추가)
	

---

## Example

#### 5~9번째 줄 맨 앞에 ```//``` 추가해서 주석처리 하기

##### 1. vim macro 이용

1. <kbd>q</kbd><kbd>a</kbd><kbd>I</kbd><kbd>/</kbd><kbd>/</kbd><kbd>space</kbd><kbd>esc</kbd><kbd>j</kbd> : 줄 맨앞으로 이동해 ```// ``` 를 추가하고 normal 모드로 변경해 아랫줄로 내려가는 커맨드를 a에 저장
2. 5번 줄로 이동해 <kbd>5</kbd><kbd>@</kbd><kbd>a</kbd> (a 매크로를 5번 반복 실행)

##### 2. norm 명령어

- <kbd>:</kbd> ```5,9norm I// ``` : (visual 모드로 선택하고 '<'> 로 지정해도 됨) 지정한 부분에 normal 모드에서 <kbd>I</kbd><kbd>/</kbd><kbd>/</kbd><kbd>space</kbd> 입력


---

## Lazyvim

<kbd>space</kbd><kbd>space</kbd> : 파일 이름 검색해서 새로운 버퍼(탭)로 열기

<kbd>space</kbd><kbd>e</kbd> : 파일 탐색기 열기

??? tip
	파일 탐색기가 열린 상태에서)
	
	<kbd>a</kbd>(add) / <kbd>d</kbd>(delete) / <kbd>r</kbd>(rename) / <kbd>y</kbd>(copy) / <kbd>x</kbd>(cut) / <kbd>p</kbd>(paste) / <kbd>c</kbd>(copy to clipboard)

<kbd>H</kbd>/<kbd>L</kbd> : 버퍼 좌/우 이동

<kbd>space</kbd><kbd>b</kbd><kbd>d</kbd>/<kbd>o</kbd> : 버퍼 닫기 (d: 현재 버퍼 닫기, o: 현재 버퍼 제외 전부 닫기)