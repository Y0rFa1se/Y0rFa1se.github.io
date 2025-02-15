# Matrix and Linear Transform

체를 공유하는 벡터공간 사이에는 벡터공간의 구조를 보존하는 특별한 함수가 존재할 수 있다.
이 함수는 너무 특별해서 **선형변환(Linear Transform)** 이라는 이름도 있다.

벡터공간의 구조를 보존한다는 것은 다음의 두 조건을 만족한다는 것을 뜻한다.
*"선형성(Linearity)를 가진다" 라고도 말한다.*

*벡터공간은 $<\mathbf{V}, F, +, \cdot>$과 $<\mathbf{W}, F, +, \cdot>$ 으로, 각각의 기저는 $\beta, \gamma$, 선형변환은 $\mathcal{T}$ 로 표기한다.*

## Definition of Linearity

$\mathcal{T}: \mathbf{V} \rightarrow \mathbf{W}$
($\mathbf{V}, \mathbf{W}$는 같은 체 $F$ 를 공유하는 벡터공간이다.)

1. Additivity

$\forall \mathbf{x, y} \in \mathbf{V} [\mathcal{T}(\mathbf{x} + \mathbf{y}) = \mathcal{T}(\mathbf{x}) + \mathcal{T}(\mathbf{y})]$

2. Homogeneity

$\forall a \in F \forall \mathbf{x} \in \mathbf{V} [\mathcal{T}(a\mathbf{x}) = a\mathcal{T}(\mathbf{x})]$

예를 들어 $\mathcal{T}: C^{\infty} \rightarrow C^{\infty}$ ($C^{\infty}$는 무한번 미분가능한 함수들의 집합이다.) 라 가정하면, $\mathcal{T}$ 는 선형변환이다. (위의 정의들을 만족함을 확인해 보라.)


## Definition of Matrix

행렬이란 체의 수들을 직사각형으로 배열한 구조를 뜻한다.
예시는 다음과 같다.

*$1, 2, 3, 4, 5, 6 \in F$일 때,*

$\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}$

너무 유명한 행렬 덧셈(행렬끼리의 곱), 곱셈(행렬끼리의 곱), 스칼라곱(체의 원소와 행렬의 곱)은 설명하지 않고 넘어간다.

행렬의 덧셈과 곱셈이 잘 정의되어(well-defined)있고, 덧셈의 역원, 항등원이 존재하는 등 벡터공간의 정의를 잘 만족시키므로,
size가 같은 행렬들의 집합은 벡터공간으로 볼 수 있다(!!).

또한 다음과 같은 놀라운 정리가 있다(증명생략)

## The Matrix is a Linear Transformation

어떤 행렬이 있을 때, 그와 대응되는 선형변환이 유일하게 존재하고,
선형변환이 있을 때, 그와 대응되는 행렬이 유일하게 존재한다.

여기서 선형변환을 $\mathcal{T}$ 라 하면, 이 선형변환에 대응되는 행렬을 $[\mathcal{T}]_{\beta}^{\gamma}$ 이라 표기한다.
$\beta, \gamma$는 각각 정의역(domain), 공역(range)에 대응하는 벡터공간의 어떤 기저이다.

이 부분에 대해 자세히 알아볼 필요가 있다.

*수학에서는 정말 많은 함수가 선형변환이기에,*
*선형변환을 다룰 수 있는 유용한 도구인 행렬은 순수수학을 넘어 응용수학 전반에 걸쳐 사용된다.*
*그러나 수학과 수학이 아닌 분야에서 배우는 선형대수학은 결이 약간 다르다.*
*응용수학을 다루는 분야에서는 벡터의 엄밀한 정의가 필요 없는 등 수학에서 다루는 일반화가 필요 없기에 행렬을 이용한 테크닉에 치중되어 있다.*
*이로 인해 행렬과 벡터를 곱하는(...) 끔찍한 일들이 일어나기도 한다.*

본론으로 돌아가서, 선형변환은 벡터공간들의 원소들을 이어주는 연산이지만, 체의 원소들의 나열인 행렬은 무슨 의미를 가지며, 선형변환과 무슨 관련이 있을까?

## Matrix Representation of a Vector

우선 벡터의 행렬표현이라는 것을 알아야 한다.

*행렬과 벡터를 곱하는 끔찍한 사태를 방지하기 위해서이다. (사실 애초에 곱할 방법도 없다.)*
*참고로 한국어로는 좌표벡터, 영어로도 Coordinate Vector라 칭하지만 벡터가 아닌 행렬이다.*

기저(Basis)를 $\beta = \{\mathbf{v_1}, \mathbf{v_2}, ..., \mathbf{v_n}\}$ 라 할 때, $\mathbf{x} \in \mathbf{V}$ 에 대해서

$\mathbf{x} = \sum\limits_{i=1}^{n}{a_i\mathbf{v_i}} (단, \ a_i \in F)$ 면,

$[x]_{\beta} = \begin{pmatrix}
a_1\\
a_2 \\
\dots \\
a_n
\end{pmatrix}$
으로 쓰고, 이를 벡터의 행렬표현이라 한다.

이제 벡터를 행렬로 표현할 수 있게 되었으므로, 다음의 관계를 기술 할 수 있다.

$\forall \mathbf{x} \in \mathbf{V} \ $
$[\mathcal{T}(\mathbf{x})]_{\gamma} = [\mathcal{T}]_{\beta}^{\gamma}[\mathbf{x}]_{\beta}$

위의 행렬과 선형변환의 관계를 나타낸 수식이다.

선형변환을 거친 후 벡터의 행렬표현과, 선형변환 행렬과 벡터의 행렬표현의 곱이 같다(!!!).

하지만 여러 응용수학에서 행렬과 벡터를 곱할 수 있고, 행렬을 벡터처럼 취급할수 있는 이유는 벡터공간을 주로 $F^n$ 으로 구성하기 때문이다.

---

Reference
- Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spense - Linear Algebra (5th Edition)