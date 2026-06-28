---
title: 대수학이란 무엇인가
description: 대수학
comments: true
date created: Saturday, June 20th 2026, 10:32:16 pm
date modified: Monday, June 29th 2026, 4:21:51 am
---

## Observation

### function

시작에 앞서 함수의 좌/우 역원(left/right inverse)를 고려해보자. (사실 이런 용어는 거의 들어본 적 없을 것이다. 이유는 후술하겠지만 자연스레 알게 될 것이다.)

우선 어떤 집합 $X$ 가 주어졌을 때, $f$를 $X$에서 자기 자신으로 보내는 함수라 하자.
이제, $g, h: X \rightarrow X$를 각각 $f$의 좌/우 역원이라 하자.
즉, 다음과 같은 관계가 성립한다.

!!! note "Definition"
	$g \circ f = \text{id}_{X}$
	
	$f \circ h = \text{id}_{X}$
	
	 (이때, $\text{id}_X$ 는 $X$에서의 identity function이다.) 

다음의 성질을 증명 없이 소개한다.

!!! info "Property"
	$f \circ \text{id}_X = f$
	
	 $\text{id}_X \circ f = f$.

!!! info "Property"
	함수의 합성은 associative 하다.
	즉, 어떤 함수 $a, b, c$ 에 대해, $(a \circ b) \circ c = a \circ (b \circ c)$ 가 성립한다.

이제 다음과 같은 사실을 알 수 있다.

!!! info "Theorem 1.1"
	어떤 집합 $X$ 가 주어졌을 때, $f$를 $X$에서 $X$로의 함수라 한다면, $f$ 의 좌우역원은 동일하다.
	 즉, 위에서의 정의에 따르면 $g = h$ 이다.
	 
	 proof)
	 $g = g \circ \text{id}_X = g \circ (f \circ h) = (g \circ f) \circ h = \text{id}_X \circ h = h$

### matrix

이번엔 $n \times n$ 가역행렬 $A$를 생각해보자. $B, C$ 는 각각 $A$의 좌/우 역원이라 하자.

!!! note "Definition"
	$BA = I$

	 $AC = I$

	($I$는 identity matrix.)

행렬이 associative 한 것은 잘 알려진 사실이다.

!!! info "Property"
	$A(BC) = (AB)C$

즉, 아까와 같은 결론을 낼 수 있다.

!!! info "Theorem 1.2"
	$n \times n$ 가역행렬 $A$ 의 좌/우 역원($B, C$)은 같다.

	proof) $B = BI = B(AC) = (BA)C = IC = C$


## Motivation

위의 각각의 논의에서 함수와 합성의 성질, 행렬과 행렬곱의 성질 등은 거의 사용되지 않았다. 사용된 것은 오직 Identity의 정의와 associativity 뿐이다.

나아가 우리는, Identity의 존재성과 associativity만 보장이 된다면 똑같은 논의를 할 수 있을 것이라 기대할 수 있다.

이에 기반하여 현대대수학에서는 위 사실들을 **다음과 같이 추상화(일반화) 할 수 있다**고 말한다.

수학에서 말하는 추상화는 필요한 성질을 제외하고 모든 성질을 제거한 일반적인 구조를 만들어내는 작업을 말한다.
이것이 바로 수학자들이 가장 즐겨하는 추상적 사고이다. 어떤 성질을 만족하는 수학적 객체가 있으면 그것을 보장하는 최소한의 성질이 무엇인지 찾는 것 말이다.

이러한 추상화라는 것은 수학의 본질과도 같아 모든 분야에서 통용되는 말이니 알아두면 좋다.

## Algebra

현대대수학에서 **대수(Algebra)**, 혹은 **대수구조(Algebraic Structure)** 는 집합과 연산이 주어진 n-tuple이다.
수학 전공자에게는 다음의 설명만으로 충분하겠지만, 전공자를 위한 글이 아니니 조금 더 자세히 알아보자.

### 집합이란 무엇인가?

라는 질문은 수학적으로 조금 subtle한 부분이 있기 때문에 이 글에서 자세히 다루지는 않는다.

다만 우리는 어떠한 것들이 집합이고 집합이 아닌지 어느정도 알고 있고, 집합이 갖는 성질등도 (중등교육을 잘 이수하였다면) 배웠기 때문에 문제는 없을 것이다.

### 연산이란 무엇인가?

연산자(operator)는 어떤 집합 $X$ 가 주어졌을 때, $X^n$ 에서 $X$로의 함수를 뜻한다.
이때 이 $n$에 따라서 $n$-ary operator(n-항 연산) 라는 이름이 붙는다.
예시로 이해하는것이 가장 빠를 것이다.

#### $+$ 는 $\mathbb{R}^2$ 에서 $\mathbb{R}$ 로 이동하는 함수이다.

즉, $+$는 2-ary operator(혹은 binary operator; 이항연산)이다.

이항연산의 경우 다음의 간단한 표기법을 사용하는 경우가 대부분이다.

!!! example
	$+((a, b))$ 를 간단히 $a+b$로 표기한다.

### 위의 예시들에서

첫번째 예시에서 어떤 집합 $X$가 주어졌을 때, $X$ 에서 $X$ 로의 함수들을 모두 모은 집합을 $F_X$ 라 하자.
또한 두 함수의 합성 $\circ$ 는 ${F_X}^2$에서 $F_X$로의 함수이므로, 이항연산이다.

즉, $(F_X, \circ)$ 를 대수구조로 취급할 수 있다.

두번째 예시에서 $n \times n$ 가역행렬들을 모두 모은 집합을 $M_{n \times n}$ 이라 하자. 행렬곱 $\cdot$ 은 ${M_{n \times n}}^2$ 에서 $M_{n \times n}$ 으로의 함수이다.

즉, $(M_{n \times n}, \cdot)$ 은 대수구조이다.


## Group(군)

사실 위의 두 대수구조는 군이라는 이름이 있는 아주 유명한 대수구조이다.
군의 정의는 다음과 같다. $(G, \cdot)$ 이라는 대수구조를 다룬다고 가정하자.

!!! note "Definition"
	1. identity(항등원, 보통 1로 표기)가 존재한다. ($\forall g \in G \ g \cdot 1 = g, \ 1 \cdot g = g$)
	2. associative 하다. ($\forall a, b, c \in G \ a \cdot (b \cdot c) = (a \cdot b) \cdot c$)
	3. inverse(역원)가 존재한다. ($\forall g \in G \ \exists g^{-1} \in G \ \text{s.t. } g^{-1} \cdot g = 1$)

위 두 예시가 군의 정의를 만족함은 자명하다. 사실은 위의 두 경우에서 중요한 성질만을 남기고 추상화를 한 결과이다.
또한 아까의 논의를 반복하여 $G$의 모든 원소의 좌/우 역원이 같음을 보일 수 있다. (따라서 3번에서 좌/우 역원을 따로 서술하지 않아도 된다.)

proof) $g$의 좌역원을 $g_l$, 우역원을 $g_r$ 이라 하자.

$g_l = g_l \cdot 1 = g_l \cdot (g \cdot g_r) = (g_l \cdot g) \cdot g_r = 1 \cdot g_r = g_r$

!!! warning "참고"
	사실 편의를 위해 $\cdot$ 을 생략하는 경우가 많다. ($a \cdot b = ab$)
	
	또한 여러번의 연산에서 괄호를 생략하는 경우가 많다. ($a(bc) = (ab)c = abc$, 단 이는 반드시 associativity가 보장되어야 함을 관찰해보자.)

이제 우리는 다음과 같이 말할 수 있다.

	함수의 합성과 행렬곱에서 좌/우 역원이 같은 이유는 이들이 군을 이루기 때문이다.

이것이 바로 현대대수학에서 다루는 추상화이고, 이러한 추상화를 통해 서로 다른 시스템이 어떻게 한 언어로 기술되는지를 살펴보았다. 이제 현대대수학이 어떤 학문인지 설명할 준비가 되었다.


## 어떤 학문인가?

위의 예시에서 관찰하였듯, 어떤 시스템이 어떠한 대수구조를 이룬다는 것만을 알아도 이 대수구조의 성질을 적용할 수 있다는 어마어마한 편리함이 있다.(별다른 증명 없이 행렬곱의 좌/우 역원이 같음을 보였듯이)

현대대수학의 기본적인 목표는 이러한 대수구조들의 성질을 파악하고, 이 대수구조들을 분류하는 대에 있다.

### 유명한 대수구조

현대대수학의 아주 큰 관심사인 3가지 대표적인 대수구조는 다음과 같다.

#### 군(Group)
[위에서 설명함](#group)

- 이때 commutative($\forall a, b \ ab = ba$)하다면, commutative(혹은 abelian) group이라 한다.

#### 환(Ring)
$(R, +, \cdot)$ 의 3-tuple이다.
정의는 다음과 같다.

!!! note "Definition"
	1. $(R, +)$ 가 abelian group이다.
	2. $\cdot$ 이 associative하다.
	3. distributive하다. ($\forall a, b, c \in R \ a(b + c) = ab + ac, \ (a + b)c = ac + bc$)

여기서 $+$의 역원은 $1$이 아닌 $0$ 으로 표기한다.

어차피 자세한 정의가 궁금한건 아닐테니 [위키피디아같은걸](https://ko.wikipedia.org/wiki/%ED%99%98_(%EC%88%98%ED%95%99)) 찾아보도록 하자.

- 곱셈이 commutative 하다면 commutative ring이라 부른다.
- 곱셈의 identity가 존재한다면 ring with unity라 부른다. ($1$로 표기한다.)
- $1$이 존재하고 $0$을 제외한 모든 원소가 inverse를 갖는다면 division ring이라 부른다.

#### 체(Field)

commutative division ring을 말한다.

[어차피 자세한 어쩌고](https://ko.wikipedia.org/wiki/%EC%B2%B4_(%EC%88%98%ED%95%99))

### 대수구조의 분류

어떤 두 대상이 같은 대수구조라고 해서 이 둘이 같다는 것은 아니다.
$(\mathbb{Z}_2, +)$와 $(\mathbb{Z}_3, +)$는 둘다 군이지만 $\mathbb{Z}_2$는 $1+1 = 0$ 인데 비해, $\mathbb{Z}_3$은 0을 제외한 어떤 원소도 $z+z = 0$을 만족시키지 않는다. ($1 + 1 = 2$, $2 + 2 = 1$ 이다.)

다만 $(\mathbb{Z}, +)$ 와 $(M_{1 \times 1}, +)$ 는 그 성질이 사실상 같다.
비수학적인 표현을 빌리자면 이 둘은 구별할 수 없다. (원소와 연산에 각각 **이름을 잘** 붙이는 작업을 통해 완전히 똑같은 상황으로 만들 수 있다.)

이렇듯, 같은 대수구조들끼리도 그 성질이 다른 것과, 구별할 수 없을 정도로 닮은 것들이 있다.
수학에서는 이들을 **동형(isomorphic)**이라 부른다.

더 모두 설명하는것은 어렵고 귀찮으니 간단한 예시만 살펴보자.

정사각형을 $90^{\circ}$ 회전하는 연산을 $r$이라 하자.
$R$ 은 $r$을 유한번 반복한 연산을 모두 모은 집합이다. $r$을 $n$번 반복한 것을 $r^n$으로 표기하자.
또한 $r^n + r^m$ 은 $r^n$ 을 적용한 후에 $r^m$ 을 적용하는 연산이라 하자. $r^n + r^m = r^{n+m}$ 임을 쉽게 알 수 있다. ($R^2$에서 $R$로의 연산이다.)

$(R, +)$ 은 군을 이룬다. $r^4 = 1$ 임은 자명하다. 이 군은 $(\mathbb{Z}_4, +)$ 와 사실상 같다.
이는 자명하지만 엄밀하지는 않다. 다음 문단을 보자.

#### Isomorphism(동형사상)

$\phi : R \rightarrow \mathbb{Z}_4$ 를 다음과 같이 정의하자. 
$\phi(r^n) = n$

1. 이 함수는 전단사(bijection)이다.
2. $n + m = \phi(r^n) + \phi(r^m) = \phi(r^n + r^m) = \phi(r^{n+m}) = n+m$ 이다.

이 함수는 두 군들의 원소를 일대일로 매핑하고 연산의 결과또한 보존한다.
이러한 함수를 Isomorphism(동형사상) 이라 한다.

$r^n$에 $\phi(r^n)$ 이라는 이름을 붙인 것으로 $n$과 구별할 수 없게 되었다. 이러한 동형사상이 존재하므로 두 군은 isomorphic(동형) 이다.

만약 $r^3$ 연산을 3번 반복한다면 어떻게 될까?
$\phi(r^3 + r^3 + r^3) = \phi(r^3) + \phi(r^3) + \phi(r^3) = 3 + 3 + 3 = 9 = 1 (\mathbb{Z_4} \text{의 원소이므로}) = \phi(r)$
이므로 r이 됨을 알 수 있다.

비록 이 경우는 아주 쉬웠지만, 우리는 $\phi$ 함수를 통해 $R$의 원소를 우리에게 친숙한 $\mathbb{Z}_4$로 끌어내린 후 연산하고 다시 $R$로 되돌려 관찰할 수 있게 되었다. 이것이 바로 대수구조의 분류와 동형이 중요한 이유이다.

군, 환/체의 동형사상의 정의를 소개하며 마친다.

!!! note "Group Isomorphism"
	$\phi$ 는 전단사함수
	
	$\phi(ab) = \phi(a)\phi(b)$

!!! note "Ring/Field Isomorphism"
	$\phi$ 는 전단사함수

	$\phi(ab) = \phi(a)\phi(b)$

	$\phi(a+b) = \phi(a)+\phi(b)$

위의 정의에서 전단사함수 조건을 제외한 것을 준동형사상(Homorphism이라 한다.)

[어차피 그긴거](https://ko.wikipedia.org/wiki/%EC%A4%80%EB%8F%99%ED%98%95)