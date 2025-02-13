# ZFC

직관에 의존하며 규칙이 모호했던 집합론(naive set theory)이 모순(Russell's Paradox)을 야기하는 문제를 해결하기 위해 정한 공리적 집합론을 도입했다. 공리(Axiom)란 증명 없이 참으로 받아들이는 명제를 말한다.

집합론이 수학에서 갖는 의미를 고려할 때, 이 공리들은 매우 중요한 의미를 가진다.

### Russell's Paradox
$Let \ A = \{x : x \notin x\}$ 일 때, A가 자기 자신을 포함한다면, A의 정의에 의해 모순이다. (A는 자기 자신을 포함하지 않는 집합들의 집합이기 때문) 또한 A가 자기 자신을 포함하지 않는다면 A는 정의에 따라 A에 포함되므로 이 역시 모순이다.



1번 공리는 집합의 유일성(uniqueness)을 보장해주고,
2~10번 공리들은 집합의 존재성(existence)을 보장해준다.

1~9번 까지의 공리들은 체르멜로(Zermelo)와 프랑켈(Fraenkel)이 고안한 ZF공리계(Zermelo–Fraenkel set theory)이고,
10번 공리는 Axiom of Choice라는 공리이다.

일반적으로 1~10번까지의 공리를 공리계로서 채택하여 사용하고 있고 이를 ZFC공리계라 부른다.

*집합론에서 모든것은 집합이지만, 편의를 위하여*
*원소는 소문자, 집합은 대문자, family는 mathbb로 표현하였다.*

## 1. Extensionality Axiom
$\forall A \forall B [\forall x(x \in A \iff x \in B) \implies A = B]$

A의 모든 원소가 B에 포함(in)되고 B의 모든 원소가 A에 포함되면 A와 B가 같다. 즉 **유일하다**.

## 2. Empty Set Axiom
$\exist B \forall x \ x \notin B$

어떤 원소도 포함하지 않는 공집합($\emptyset$)이 존재한다.

## 3. Paring Axiom
$\forall u \forall v \exist B \forall x(x \in B \iff x = u \lor \ x = v)$

$u$ 와 $v$만을 갖는 집합이 존재한다.
이때 $u$와 $v$가 다를 필요는 없으므로, 하나의 원소만을 갖는 집합(singleton)의 존재도 이 공리로서 보장된다.

## 4. Union Axiom
$\forall \mathbb{A} \exist B \forall x[x \in B \iff (\exist A \in \mathbb{A}) x \in A]$

family $\mathbb{A}$에 대해 $\cup \mathbb{A}$가 존재한다. (family는 집합들의 집합을 뜻한다. $\mathbb{A}$의 원소들은 모두 집합이다. 이 문서에서는 일반적인 집합과 구분하기 위해 $\mathbb{A}$로 표기했다.)
$\cup \mathbb{A}$는 $\mathbb{A}$안의 모든 원소들을 $\cup$(union)한 집합을 뜻한다.

$Let \ \mathbb{A} = \{A_1, A_2, ... , A_n\}$ 이고 $a_i$가 각각 집합일 때,
$\cup \mathbb{A} = A_1 \cup A_2 \cup ... \cup A_n$ 이다.

무한집합인 경우를 고려하여 $\cup \mathbb{A}$를 사용한다.

## 5. Power Set Axiom
$\forall A \exist B \forall x(x \in B \iff x \subseteq A)$

원래 집합의 부분집합을 원소로 하는 멱집합(Power Set)이 존재한다.

$\mathcal{P}(A)$ 혹은 $2^A$ 등으로 표기한다.

$Let \ A = \{0, 1\}$ 이면 $\mathcal{P}(A) = \{\emptyset, \{0\}, \{1\}, \{0, 1\}\}$ 이 된다.

## 6. Subset Axiom
$\forall A \exist B \forall x(x \in B \iff x \in A \land \varphi(x))$

$A$가 주어졌을 때, $A$의 원소 중 특정 조건을 만족시키는 원소들을 모은 부분집합이 존재한다.

$B=\{a \in A: a \ is \ ...\}$인 집합이 존재한다.

여기서

$\exist B \forall x(x \in B \iff \varphi(x))$,

$B=\{b \ is \ ...\}$가 아닌 이유는 Russell's Paradox를 야기할 수 있기 때문이다.

이 공리로부터 모든 집합들의 집합이 존재하지 않는다는 것을 이끌어 낼 수 있다.

*$Let \ \mathbb{S} = \{S: S \ is \ a \ set\}$ 이라 하면,*
*$A = \{x \in \mathbb{S} : x \notin x\}$ (Russell's Paradox)*

여기서

$\forall \varphi \forall A \exist B \forall x(x \in B \iff x \in A \land \varphi(x))$
라고 쓰지 않는 이유는 1계논리(first order logic)으로 서술했을 때 이점이 있기 때문이다.

---

Reference
- Enderton, Herbert B. - Elenment of set theory