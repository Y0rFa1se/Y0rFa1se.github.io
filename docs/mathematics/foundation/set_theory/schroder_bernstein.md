---
title: Schröder–Bernstein theorem
description: Schröder–Bernstein theorem, 슈뢰더 베른슈타인 정리
comments: true
---
개인적으로 좋아하는 정리중 하나인 슈뢰더-베른슈타인 정리에 대해서 소개한다.

좋아하는 이유는 여러가지 있지만 몇가지 뽑아보자면,

1. theorem, proof를 이해하는데 수학적 지식이 필요없는 수준
2. 결과가 매우 직관적임
3. 그에 비해 아이디어는 난이도가 꽤 있음

정도가 있다.

Statement나 알아보자.

## Schröder–Bernstein theorem

!!! info "Schröder–Bernstein theorem"
	$$
	\begin{matrix}
	\text{If } |A| \le |B| \text{ and } |B| \le |A|, \\
	\text{then } |A| = |B|.
	\end{matrix}
	$$
- **당연한거 아닌가?**

라는 생각이 들 수 있지만, 여기서 등장하는 $A$, $B$ 는 집합이다.
당연히 무한집합도 포함한다.

사실 유한집합일때는 집합의 크기가 자연수이므로 Trichotomy가 성립하기때문에 볼 것도 없다. ($<$, $>$, $=$ 중 한가지 relation은 반드시 만족한다.)

- **무한집합의 크기는 무한이니까 무한집합일때도 성립하는거 아닌가?? ($\infty = \infty$ 이므로)**

라는 질문에 대한 답을 잘 모른다면, 아래 부분을 읽으면 이 정리가 왜 중요한지 알 수 있을 것이다.

### Cardinality

시작하기 전에 우선 "무한집합의 크기" 라는것을 비교하는 방법과, 유명한 무한의 비직관성을 잠깐 알아보자.
좋은 motivation이 될 수도 있다.

#### "자연수의 개수와 정수의 개수는 같다."

Cantor가 했던 주장이다.

$$
\text{Let } f: \mathbb{N} \to \mathbb{Z} \text{ be defined by } 
f(n) = \begin{cases} 
\frac{n}{2} & \text{if } n \text{ is even} \\ 
-\frac{n-1}{2} & \text{if } n \text{ is odd} 
\end{cases}
$$

위 함수는 자명히 bijective 함수이다.

칸토어는 $\mathbb{N}$ 과 $\mathbb{Z}$ 의 원소들을 각각 하나하나 매칭시킬 수 있으므로 두 집합의 크기는 같다고 주장했다.

어떤 집합의 proper subset이 원래의 집합과 크기가 같아질 수 있다는  사실은 당대의 수학자들을 매우 놀라게 했다. 또한 이런 방식으로 무한집합의 크기가 전부 같은 무한($\infty$) 임을 보일수 있을 것이라는 생각을 하게 만들었다.

허나...
#### "실수의 개수는 자연수의 개수보다 많다."

이 역시 칸토어가 이후에 했던 주장이다.

그는 $f: \mathbb{N} \rightarrow \mathbb{R}$ 인 함수는 결코 surjection이 될 수 없음을 보였다. (bijection이 안되는 것은 말할 필요도 없다.)
이것이 그 유명한 [칸토어의 대각선 논법](https://ko.wikipedia.org/wiki/%EB%8C%80%EA%B0%81%EC%84%A0_%EB%85%BC%EB%B2%95)이다.

또한 그는 $f: \mathbb{R} \rightarrow \mathbb{N}$ 인 함수는 자명히 surjective 함수가 될 수 있지만, $f: \mathbb{N} \rightarrow \mathbb{R}$ 인 함수는 surjective 함수가 될 수 없음(대각선 논법)을 통해 실수의 개수가 자연수의 개수보다 많다고 주장했다.

이 논의는 추후 무한집합의 크기를 비교하는 데에 있어서 중요한 역할을 했다.

#### Comparison

Cardinality에 대해 직접적으로 다루는 것은 이 글의 스코프를 아득히 벗어난다.

우리는 (주로 무한)집합들의 크기를 비교하는 방법만 알아보자.

사실은 위에서 칸토어가 사용했던 방법을 거의 그대로 채용한다. 다만 surjection이 아닌 injection을 중심으로 설명한다.

!!! info "Definition"
	$\vert \mathbb{A} \vert$ 가 $\vert \mathbb{B} \vert$ 보다 크지 않다. 즉 $\vert \mathbb{A} \vert \le \vert \mathbb{B} \vert$ 를
	
	 **"$f: \mathbb{A} \rightarrow \mathbb{B}$ 인 injective 함수가 존재한다."** 라고 정의한다.


- $f: \mathbb{A} \rightarrow \mathbb{B}$ 인 injective 함수가 존재한다면, $\mathbb{A}$ 의 모든 원소를 대응시켜도 $\mathbb{B}$ 의 원소가 남을 수 있다는 사실을 생각해보자.

어떤 두 집합 $\mathbb{A}, \mathbb{B}$ 가 있다고 해보자. 이때 이 두 집합간의 크기비교는 다음과 같다.

|                                                            | $f: \mathbb{A} \rightarrow \mathbb{B}$ 인 injective 함수 존재 | $f: \mathbb{A} \rightarrow \mathbb{B}$ 인 injective 함수 존재 X |
| ---------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| $f: \mathbb{B} \rightarrow \mathbb{A}$ 인 injective 함수 존재   | **??**                                                   | $\vert \mathbb{A} \vert > \vert \mathbb{B} \vert$          |
| $f: \mathbb{B} \rightarrow \mathbb{A}$ 인 injective 함수 존재 X | $\vert \mathbb{A} \vert < \vert \mathbb{B} \vert$        | **X**                                                      |

(\+ 추가로) $f: \mathbb{A} \rightarrow \mathbb{B}$ 인 bijective 함수가 존재한다면 $\vert \mathbb{A} \vert = \vert \mathbb{B} \vert$


??? warning "여기서는 불필요한 논쟁은 하지 않는다..."
	마지막 **X** 칸은 사실 굉장히 tricky한데, AC(Axiom of Choice; 선택공리)를 받아들였을때 **결코 일어날 수 없다**. 이에 대한 설명 역시 이 글에 대한 스코프를 넘어가므로 다루지는 않지만 직관에 반하는 결과는 아님을 생각해보자.
	
	$f: \mathbb{A} \rightarrow \mathbb{B}$ 인 injective 함수가 존재하지 않는다는 것은 $\mathbb{B}$ 의 원소에 하나하나 대응시키기에 $\mathbb{A}$ 의 원소가 너무 많다는 뜻인데, 그렇다면 $f: \mathbb{B} \rightarrow \mathbb{A}$ 인 injective 함수가 존재한다고 보는것이 타당하다.

#### 근데 잠깐....

우선 $f: \mathbb{A} \rightarrow \mathbb{B}$ 인 bijection이 존재한다면 당연히 $\mathbb{A} \rightarrow \mathbb{B}$ , $\mathbb{B} \rightarrow \mathbb{A}$ 인 injection이 각각 존재하는 것이므로 (**??** 칸의 경우에 속하므로) injection과 bijection 두 정의가 상충되지는 않는다.

다만 위의 정의는 **$\vert \mathbb{A} \vert \le \vert \mathbb{B} \vert$ , $\vert \mathbb{B} \vert \le \vert \mathbb{A} \vert$ 라고 해서 $\vert \mathbb{A} \vert = \vert \mathbb{B} \vert$ 임을 보장하지는 않는다.**
이는 상당히 큰 문제다.

($\mathbb{A} \rightarrow \mathbb{B}$, $\mathbb{B} \rightarrow \mathbb{A}$ 인 injection이 각각 존재한다고 해서 $\mathbb{A} \rightarrow \mathbb{B}$ 인 bijection이 존재한다고 할 수는 없다.)

우리의 직관은 당연히 그러한 함수가 존재하기를 기대한다.

**그리고 그 미싱링크는 [슈뢰더-베른슈타인 정리](#schroderbernstein-theorem)로 이어진다.**(!!)

다만 증명은 예상했듯이 그리 쉬운 일이 아니다.

어떻게 생긴지도 모르는 두 injective 함수를 가지고 하나의 bijective 함수의 존재성을 보여야 하는 것이다.

아래는 드디어드디어 증명이다.

### Proof

!!! info "Notations"
	 $\overline{A}$ or $A^C$ : Complement of $A$ ($A$ 의 여집합)
	
	$f[A]$ : $f$ 의 $A$ 에서의 image. $\{f(a): a \in A\}$

$f: A \rightarrow B$, $g: B \rightarrow A$ 인 두 injective함수가 존재한다고 가정해보자. $h: A \rightarrow B$ 를 구성하고 bijection임을 보이는 것이 목표다.

![](../../../images/sb_fg.drawio.svg)

각각 $f[A]$, $g[B]$ 를 나타낸 그림이다.

#### 1. $C_n$  정의

우선 집합열 $C_n$ 을 다음과 같이 정의한다.

$$
C_n =
\begin{cases}
\overline{g[B]} & \text{if } n = 0 \\
g[f[C_{n-1}]] & \text{if } n > 0
\end{cases}
$$

$C_0 = \overline{g[B]}$ 를 나타내면 아래와 같다.

![](../../../images/sb_c0.drawio.svg)

$C_1 = g[f[C_0]]$ 이다.

세번째 그림은 $f[C_0]$ 을 나타낸 그림인데, 색칠된 부분은 $f[A]$ 보다 약간 작을 것이다. (injection 이므로)

네번째 그림은 $g[f[C_0]]$ 을 나타낸 것이다. $g[B]$ 보다 작은 $g[f[A]]$ 보다도 약간 작으므로, $g[B]$ 로 생긴 구멍 안에 들어간다.

![](../../../images/sb_c1.drawio.svg)

이제 $C_2 = g[f[C_1]]$ 이다.

첫번째 그림의 색칠한 부분은 $f[C_0]$, 바로 위의 세번째 그림인데 공간이 작아 약간의 왜곡을 했다.

세번째 그림 $f[C_1]$ 을 보자.
injection임을 생각하면 $f[C_0]$ 과 겹치지 않는 것이 이상하지 않다.

마찬가지로 네번째 그림 $g[f[C_1]]$ 을 보면, $C_1 (= g[f[C_0]])$ 과 겹치지 않는 것은 injection이므로 당연하다.

($C_2$ 역시 $g[B]$ 구멍 안에 들어가 있는 것은 위와 같은 이유이다.)

![](../../../images/sb_c2.drawio.svg)

이제 규칙이 좀 보이는가?

$C_0$ 은 테두리, $C_1, C_2, C_3, \cdots$ 은 그 안의 겹치지 않는 작은 집합들을 생성한다.

#### 2. $C$ 정의

이제 $C = \bigcup\limits_{n=0}^{\infty}{C_n}$ 로 두자.
$C$ 를 나타낸 그림은 아래 왼쪽과 같다. 오른쪽도 이해를 쉽게 만들기 위해 그려두었으니 확인해보자.

![](../../../images/sb_c.drawio.svg)

![](../../../images/sb_c.drawio(1).svg)

#### 3. $h$ 정의

이제 $h: A \rightarrow B$ 를 다음과 같이 정의해보자.

$$
h(x) =
\begin{cases}
f(x) & x \in C \\
g^{-1}(x) & x \in \overline{C}
\end{cases}
$$

즉, $x$ 가 $A$ 의 색칠된 부분에 포함된다면 $f(x)$ 를 함수값으로 가지고, 이 함수값은 $B$ 의 색칠된 부분에 들어간다.

반대로 $x$ 가 색칠된 부분에 포함되지 않을때는 $g^{-1}(x)$ 를 함수값으로 가진다.
이때 $g^{-1}(x)$ 는 $B$ 의 색칠된 부분에 존재할 수 없음을 확인해보자. ($g(g^{-1}(x)) = x$ 가 색칠된 부분 밖에 있기 때문이다.)

- $g$ 는 injection이므로, $g(a) = b$ 인 $a$ 는 딱 하나만 정해진다. 즉, $g^{-1}(x)$ 가 존재한다.

즉 이 함수는 색칠된 부분은 색칠된 부분끼리, 색칠되지 않은 부분은 색칠되지 않은 부분끼리 이어준다.

#### 4. 그럼 이제 마지막으로

위와 같이 구성된 $h$ 가 bijection임을 보이면 증명은 끝난다.

##### 4.1. injection

$h$ 는 injection이다.

$x_1, x_2 \in A$ 가 있다고 하자. (당연히 $x_1 \neq x_2$ 라고 가정한다.) 만약 $x_1$ 은 $C$ 안에, $x_2$ 는 $\overline{C}$ 에 포함된다면 (혹은 반대라면) 각각 $B$ 의 색칠된 부분, 색칠되지 않은 부분에 매핑되므로 괜찮다.

$x_1, x_2$ 가 둘다 $\overline{C}$ 안에 포함된다면?
$g^{-1}(x_1) = g^{-1}(x_2)$ 인 것은 불가능하다.

만약 그렇다면 $g^{-1}(x_1) = g^{-1}(x_2) = z$ 라 했을 때, $g(z) = x_1 = x_2$ 가 되고 이는 모순이다.

그렇다면 $x_1, x_2$ 가 $C$ 안에 있다면?
이때는 애초에 $f$ 가 injection이므로 증명할 것이 없다.

따라서 $h$ 는 injection이다.

##### 4.2. surjection

$h$ 는 surjection이다.

$\forall b \in B \ \exists a \in A \ h(a) = b$ 임을 보이면 된다.

만약 $b$ 가 색칠된 부분 안에 있다면?
$C_n$ 의 생성과정을 생각하면, 그러한 $a$ 는 $C_n$ 의 과정중에서 반드시 나타난다.

그렇다면 $b$ 가 색칠되지 않은 부분에 있다면?
$g(b)$ 는 $g[B]$ 로 생긴 구멍 안에 있는 것을 생각해보자.
위에서와 같은 이유로 $g(b)$ 는 $A$ 의 색칠되지 않은 부분, $\overline{C}$ 에 있을 수 밖에 없다.

즉, 이때 이 $g(b)$ 를 $a$ 라 하면 $h(a) = g^{-1}(a) = b$ 이므로 이러한 $a$ 가 항상 존재하는 것을 알 수 있다.

따라서 $h$ 는 surjection이다.

##### 4.3. Conclusion

우리는 $h$ 가 injection이며 surjection임을 확인했으므로, $h$ 는 bijection이다.

즉,

$$
\begin{matrix}
\text{If } |A| \le |B| \text{ and } |B| \le |A|, \\
\text{then } |A| = |B|.
\end{matrix}
$$

이다.