# Vector Space

선형대수학에서 다루는 주요 대수구조는 벡터공간(Vector Space)이다.
벡터공간이라는 것을 이해하기 위해서는 우선 체(Field)라는 것을 정의해야 하는데,
체란 다음의 조건들을 만족시키는 대수구조이다.

## Defenition of Field
체의 정의에는 집합($F$)와 두 이항연산($+$, $\cdot$)이 필요하다.

*꼭 $+$와 $\cdot$일 필요는 없다.*
*이 때 편의를 위해 이 두 이항연산을 $<a, b> \in F^2$에 대해 $+(<a, b>)$와 $\cdot (<a, b>)$가 아닌 $a + b$, $a \cdot b$로 표기한다.*
*$a \cdot b$ 는 $ab$ 로도 표기할 수 있다.*
*또한 $a+b$ 와 $a \cdot b$ 를 각각 덧셈, 곱셈이라 칭한다.*

다음의 정의를 모두 만족시키는 순서집합(ordered set) $<F, +, \cdot>$을 체라 정의한다. ($F$ 를 말할때도 있다.)

1. $\forall a, b \in F (a + b, a \cdot b \in F)$

집합 $F$ 위에 덧셈과 곱셈이 정의되어 있으며, 이 두 연산에 대해 닫혀있다.(덧셈과 곱셈의 결과를 모두 포함한다.)

2. $+$, $\cdot$이 commutative, associative하다.

이 두 연산들에 대해서 교환법칙, 결합법칙이 성립한다.
$a+b=b+a$ 이고 $a+(b+c)=(a+b)+c$ 이다.(곱셈도 마찬가지)

*두 연산이 commutative, associative하므로 $+$만 있는 식과 $\cdot$만 있는 식에 괄호를 사용하지 않아도 된다.*

3. 덧셈의 항등원(additive identity)와 덧셈의 역원(additive inverse)이 존재한다.

항등원($0$)은 $\forall a \in F (a + 0 = a)$ 를 만족시키는 원소를 뜻한다.

*$\exists 0 \forall a \in F (a + 0 = a)$ 이다. $\forall a \in F \exists 0 (a + 0 = a)$이 아니다.*

역원($-a$)는 $a + (-a) = 0$(덧셈의 항등원) 을 만족시키는 원소를 뜻한다.

*이때는 $\forall a \in F \exists (-a) \in F$ 이다.*

*이 정의에 의해 뺄셈도 항상 정의된다. (빼는 수의 덧셈의 역원을 더하는 연산으로 이해할 수 있다.)*

이때, 덧셈의 항등원과 역원은 모두 유일하다.

4. 곱셈의 항등원(multiplicative identity)과 $0$이 아닌 원소에 대해 곱셈의 역원(multiplicative inverse)가 존재한다.

항등원($1$)은 $\forall a \in F (a \cdot 1 = a)$ 를 만족시키는 원소를 뜻한다.

*역시 $\exists 1 \forall a$ 이다. $\forall a \exists 1$ 이 아니다.*

역원($a^{-1})$은 $a \cdot a^{-1} = 1$(곱셈의 항등원)을 만족시키는 원소를 뜻한다.

*이 역시 $\forall a \in F \exists a^{-1} \in F$이다.*

여기서 $1 \neq 0$ 이다.

5. 분배법칙(distribution law)이 성립한다. (좌우 모두)

즉 $a(b + c) = ab + ac$ 이며, $(a + b)c = ac + bc$ 이다.


이제 체를 정의했으니 벡터공간을 정의할 수 있다.

## Definition of Vector Space(VS)
체($F$)와 두 이항연산 $+$, $\cdot$ 이 필요하다. 이때 이 연산들은 체 위에서가 아닌 벡터공간 위에서 정의되어야 한다.

다음의 정의를 만족시키는 순서집합$<\mathbf{V}, F, +, \cdot>$을 벡터공간이라 정의한다. ($\mathbf{V}$ 를 말할때도 있다.)

벡터공간의 원소를 벡터(vector), 체의 원소를 스칼라(scalar)라 부른다.

*벡터공간($\mathbf{V}$)은 체($F$)와 구분하기 위해 볼드체로 적을 것이다. (벡터공간의 원소인 벡터도 스칼라와 구분하기 위해 볼드체로 적는다.)*
*여기서도 역시 $+, \cdot$ 을 덧셈, 곱셈이라 하자*
*곱셈표기는 생략가능하다.*

1. 덧셈, 곱셈에 대해 닫혀있다.

$\forall a, b \in \mathbf{V} a+b \in \mathbf{V}$ 이고,
$\forall \mathbf{a} \in \mathbf{V} \forall c \in F c\mathbf{a} \in \mathbf{V}$ 이다.

*여기서 곱셈이 벡터끼리의 곱셈이 아닌 벡터와 스칼라의 곱셈임에 유의하자.*

2. $<V, +>$ 가 아벨리안 그룹(abelian group)을 이룬다. (또 다른 대수구조의 이름이다.)

덧셈의 결합, 교환법칙이 성립하고, 항등원, 역원이 존재한다.
임의의 벡터($\mathbf{a}$)의 덧셈의 항등원과 역원을 각각 $\mathbf{0}$과 $-\mathbf{a}$으로 표기한다.
영벡터(zero vector)와 역벡터(inverse vector)라는 이름이 있다.

*항등원과 역원의 $\forall \exists$ 순서는 위와 같다.*

3. $1 \in F \forall \mathbf{v} \in \mathbf{V}$ 에 대해 $1 \cdot \mathbf{v} = \mathbf{v}$ 이다.

체에서의 곱셈의 역원이 유지된다.

4. $\forall a, b \in F \forall \mathbf{v} \in \mathbf{V} [(ab)\mathbf{v} = a(b\mathbf{v})]$ 이다.

5. $\forall a, b \in F \forall \mathbf{x}, \mathbf{y} \in \mathbf{V} [a(\mathbf{x} + \mathbf{y}) = a\mathbf{x} + a\mathbf{y}] \land [(a + b)\mathbf{x} = a\mathbf{x} + b\mathbf{y}]$ 이다.

---

Reference
- Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spense - Linear Algebra (5th Edition)