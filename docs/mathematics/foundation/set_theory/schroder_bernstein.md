---
title: Schröder–Bernstein theorem
description: Schröder–Bernstein theorem, 슈뢰더 베른슈타인 정리
comments: true
---
개인적으로 좋아하는 정리중 하나인 슈뢰더-베른슈타인 정리에 대해서 소개한다.

좋아하는 이유는 여러가지 있지만 몇가지 뽑아보자면,

1. theorem, proof를 이해하는데 수학적 지식이 필요없는 수준
2. 결과가 매우 직관적임
3. 그에 비해 증명은 난이도가 꽤 있음

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
**이건 너무 당연한거 아닌가?** 라는 생각이 들 수 있지만, 여기서 등장하는 $A$, $B$ 는 집합이다.

당연히 무한집합도 포함한다.

사실 유한집합일때는 집합의 크기가 자연수이므로 Trichotomy가 성립하기때문에 볼 것도 없다. ($<$, $>$, $=$ 중 한가지 relation은 반드시 만족한다.)

### Cardinality

시작하기 전에 우선 "무한집합의 크기" 라는것을 정의하는 방법과, 유명한 무한의 비직관성을 잠깐 알아보자.

이런 당연해보이는 statement를 증명한다는 데에 대한 좋은 motivation이 될 수도 있다.

---

(쓸거임)

![](../../../images/sb_fg.drawio.svg)

![](../../../images/sb_c0.drawio.svg)
![](../../../images/sb_c1.drawio.svg)![](../../../images/sb_c2.drawio.svg)![](../../../images/sb_c.drawio.svg)
![](../../../images/sb_c.drawio(1).svg)

