---
title: Euler's Number
---

<div class="abstract">
    <h2>Abstract</h2>
    <p>
    해석학에서 중요한 역할을 맡고있는 오일러 상수와 관련 함수들의 성질에 대해서 알아보자.
    이 포스트에서 다루는 체(Field)는 실수로 한정한다.
    </p>
</div>

## Euler's Number $e$
오일러 상수 $e$는 $\lim\limits_{n \rightarrow \infty} {(1 + 1/n)^n}$ 의 수렴값임이 아주 잘 알려져 있다.

따라서 간단하게 존재성만 보이도록 하자.

다음의 정리들을 증명없이 소개한다.

#### Monotone Convergence Theorem
> If a sequence of real numbers $a_n$ is monotone and bounded, then $a_n$ converges

#### Binomial Theorem
> $\forall a \in \mathbb{R} \ \forall n \in \mathbb{N}$,

> $$(1 + a)^n = \sum\limits_{k=0}^n{\binom{n}{k} a^k}$$


이제 $a_n = (1+\frac{1}{n})^n$ 으로 두자.

binomial theorem에 의해서 $a_n = \sum\limits_{k=0}^n{\binom{n}{k} \frac{1}{n^k}}$이고,

$k \geq 1$일때 $(k+1)$번째 term은 $\binom{n}{k} \frac{1}{n^k} = \frac{n(n-1) \cdots (n-k+1)}{1 \cdot 2 \cdots k} \cdot \frac{1}{n^k} = \frac{1}{1 \cdots k}(1 - \frac{1}{n}) \cdot (1 - \frac{2}{n}) \cdots (1 - \frac{k-1}{n})$ 이다.

이때, $\frac{1}{1 \cdots k}(1 - \frac{1}{n}) \cdot (1 - \frac{2}{n}) \cdots (1 - \frac{k-1}{n}) < \frac{1}{1 \cdots k}(1 - \frac{1}{n + 1}) \cdot (1 - \frac{2}{n + 1}) \cdots (1 - \frac{k-1}{n + 1})$이다. (이때 우변이 $a_{n+1}$의 binomial term의 $(k+1)$번째 항임을 주목하자)

따라서 $\forall n \in \mathbb{Z^+} \ a_n < a_{n+1}$이고, $a_n$은 monotone sequence이다.
$a_n$이 bounded인 것을 보이면 $a_n$의 수렴성을 보장할 수 있고 이때의 수렴값을 $e$라고 부를 수 있다.

$\frac{n(n-1) \cdots (n-k+1)}{1 \cdot 2 \cdots k} \cdot \frac{1}{n^k} \leq \frac{1}{1 \cdots k} = \frac{1}{k!}$이므로,

$a_n < 1 + \frac{1}{1!} + \frac{1}{2!} + \cdots + \frac{1}{n!} < 1 + \frac{1}{2^0} + \frac{1}{2^1} + \cdots + \frac{1}{2^n} < 1 + \frac{1}{2^0} + \frac{1}{2^1} + \frac{1}{2^2} + \cdots = 1 + \sum\limits_{k=0}^{\infty}{\frac{1}{2^k}}$ 임을 쉽게 확인 할 수 있다.

$\sum\limits_{k=0}^{\infty}{\frac{1}{2^k}} = 2$ 임이 매우 잘 알려져 있으므로, $a_n < 3$으로 bounded sequence이다.

즉 $a_n$은 3이하의 어떤 수로 수렴한다. 이제 이 수렴값을 $e$라 표기하자. ($e$는 약 2.71...임이 잘 알려져 있다.)

## Natural Logarithm

이제 조금 다른 얘기를 해보자.
이제부터의 목표는 $e^x, \ln x$를 정의하는 것이다. (이는 $(e^x)' = e^x$ 등의 결과를 유도해내기 위함이다.)

$e^x$를 지수의 정의를 이용해 자연스럽게 정의하고 이의 역함수로 $\ln x$를 정의하는 아이디어를 떠올릴 수 있지만, 사실 이는 매우 까다로운 문제가 하나 있다.

우리는 $a \in \mathbb{R^+}, n \in \mathbb{N}$ 일때는 $a \cdot a \cdots a (n \ times) = a^n$로 정의하였다.
$a^{-n} = \frac{1}{a^n}, \ a^{\frac{1}{n}} = \sqrt[n]{a}$로 정의하고 지수법칙을 이용하여 지수를 유리수($\mathbb{Q}$)까지 자연스럽게 확장 할 수 있다.
다만 실수 지수를 정의하는 것은 매우 까다롭다.

따라서 이제부터 이전에 정의한 $e$와는 전혀 무관하게 함수를 정의하고, 그게 사실은 $e$에 관한 함수였다는 것을 보일 것이다.

우선 다음의 정리들을 소개해보자.

#### Fundamental Theorem of Calculus