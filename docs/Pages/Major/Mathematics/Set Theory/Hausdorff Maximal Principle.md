# Hausdorff Maximal Principle

## Definition of Maximal member
Let $\mathcal{F}$ be a family of sets. A member $M$ of $\mathcal{F}$ is called **Maximal** (with respect to set inclusion) if $M$ is contained in no member of $\mathcal{F}$ other than $M$ itself.

## Definition of Chain
A collection of sets $\mathcal{C}$ is called a **chain** (or **nest** or **tower**) if for each pair of sets $A$ and $B$ in $C$, either $A \subseteq B$ or $B \subseteq A$.

## Hausdorff Maximal Principle
Let $\mathcal{F}$ be a family of sets. If, for each chain $\mathcal{C} \subseteq \mathcal{F}$, there exists a member of $\mathcal{F}$ that contains all the members of $\mathcal{C}$, then $\mathcal{F}$ contains a maximal member.

---

AC(Axiom of Choice)와 동치이다.
AC를 가정했을 때, Hausdorff Maximal Priniple을 증명 할 수 있고,
Hausdorff Maximal Priniple을 가정했을 때 역시 AC를 증명 할 수 있다.


## 모든 Family는 Maximal을 갖는가?
###### Chain $\mathcal{C}$ 가 주어졌을때, $\cup \mathcal{C}$을 Maximal로 잡을 수 있는 것이 아닐까?
-> $\cup \mathcal{C}$가 $\mathcal{F}$ 안에 존재하지 않을 수 있다.
ex) $\mathcal{F} = \{[0, 1-\frac{1}{n}]: \forall n \in \mathbb{N}\}$ 의 경우 $\mathcal{C} = \mathcal{F}$ 일때, $\cup \mathcal{C} = [0, 1)$ 이지만 이 집합은 $\mathcal{F}$ 안에 존재하지 않는다.

---

Reference
-  Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spense - Linear Algebra (5th Edition)