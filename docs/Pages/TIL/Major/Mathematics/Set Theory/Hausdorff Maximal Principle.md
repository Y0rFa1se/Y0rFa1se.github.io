# Hausdorff Maximal Principle

## Definition of Maximal member
Let $\mathcal{F}$ be a family of sets. A member $M$ of $\mathcal{F}$ is called **Maximal** (with respect to set inclusion) if $M$ is contained in no member of $\mathcal{F}$ other than $M$ itself.

$M$을 포함(subset)하는 원소가 $\mathcal{F}$ 안에 존재하지 않을 때, $M$은 $\mathcal{F}$ 의 Maximal member이다. 무한집합의 경우 Maximal member가 존재하지 않는 경우가 있다.

ex) $\{[0, n]: \forall n \in \mathbb{N}\}$ 의 경우 어떤 원소를 잡아도 그 원소를 포함하는 원소가 존재한다.


*Family, Collection, Class 등의 용어는 집합을 원소로 하는 집합(set of set)을 의미한다.*
*이 표현은 크게 두가지 이유에서 사용되는데,*
*첫 번째 이유는 Russell's Paradox를 야기할 수 있는 표현을 피하기 위함이고,*
*두 번째 이유는 좁은 의미의 집합론에서 수학의 모든것은 집합이기에, 원소가 있는 모든 집합은 집합들의 집합이 된다. 따라서 이를 확실히 하기 위함이다.*

## Definition of Chain
A collection of sets $\mathcal{C}$ is called a **chain** (or **nest** or **tower**) if for each pair of sets $A$ and $B$ in $C$, either $A \subseteq B$ or $B \subseteq A$.

아래 그림과 같은 구조의 포함관계를 가진 집합이 있을 때, $\{A, B, C, ...\}$ 를 Chain이라 할 수 있다.

![chain](https://imgur.com/Bv8oAfU.png)

## Hausdorff Maximal Principle
Let $\mathcal{F}$ be a family of sets. If, for each chain $\mathcal{C} \subseteq \mathcal{F}$, there exists a member of $\mathcal{F}$ that contains all the members of $\mathcal{C}$, then $\mathcal{F}$ contains a maximal member.

AC(Axiom of Choice)와 동치이다.
AC를 가정했을 때, Hausdorff Maximal Priniple을 증명 할 수 있고,
Hausdorff Maximal Priniple을 가정했을 때 역시 AC를 증명 할 수 있다.


## 모든 Family는 Maximal을 갖는가?
###### Chain $\mathcal{C}$ 가 주어졌을때, $\cup \mathcal{C}$를 Maximal로 잡을 수 있는 것이 아닐까?
-> $\cup \mathcal{C}$가 $\mathcal{F}$ 안에 존재하지 않을 수 있다.
ex) $\mathcal{F} = \{[0, 1-\frac{1}{n}]: \forall n \in \mathbb{N}\}$ 의 경우 $\mathcal{C} = \mathcal{F}$ 일때, $\cup \mathcal{C} = [0, 1)$ 이지만 이 집합은 $\mathcal{F}$ 안에 존재하지 않는다.

---

Reference
-  Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spense - Linear Algebra (5th Edition)