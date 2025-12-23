---
title: Euler's Number
abstract: 해석학에서 중요한 역할을 맡고있는 오일러 상수와 관련 함수들의 성질에 대해서 알아보자. 이 포스트에서 다루는 체(Field)는 실수로 한정한다.
category: Mathematics/Analysis/Real Analysis/Euler's Number
---

## Euler's Number $e$
오일러 상수 $e$는 $\lim\limits_{n \rightarrow \infty} {(1 + \frac{1}{n})^n}$ 의 수렴값임이 아주 잘 알려져 있다.

따라서 간단하게 존재성만 보이도록 하자.

다음의 정리들을 증명없이 소개한다.

#### Monotone Convergence Theorem
> If a sequence of real numbers $a_n$ is monotone and bounded, then $a_n$ converges.

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
$a^{-n} = \frac{1}{a^n}, \ a^{\frac{1}{n}} = \sqrt[n]{a}$로 정의하고 지수법칙을 이용하여 지수를 Rational($\mathbb{Q}$)까지 자연스럽게 확장 할 수 있다.
다만 실수 지수를 정의하는 것은 매우 까다롭다.

따라서 이제부터 이전에 정의한 $e$와는 전혀 무관하게 함수를 정의하고, 그게 사실은 $e$에 관한 함수였다는 것을 보일 것이다.

우선 다음의 정리들을 소개해보자.

#### Fundamental Theorem of Calculus (second form)

> Let $f \in \mathcal{R}[a, b]$ (integrable in \[a, b\]). Define $F$ on \[a, b\] by
> 
>  $$F(x) = \int_a^x{f(t)dt}$$
>  
>  Then $F$ is continuous on \[a, b\]. Furthermore, if $f$ is continuous at $c \in [a, b]$, then $F$ is diffrentiable at c and 
>  
>  $$F'(c) = f(c)$$

#### Integrability

> Every continuous function is Riemann integrable

#### Lemma 1

> Suppose $f: I \rightarrow \mathbb{R}$ is differentiable on the interval $I$.
>
> If $\forall x \in I \ f'(x) = 0$, then $f$ is constant on $I$.

(이 지극히 당연해 보이는 Lemma는 사실 Interval이 아닌 정의역에서는 성립하지 않을 수 있다.)


이제 $L(x) \  (x > 0)$ 함수를 다음과 같이 정의하자.
$$
L(x) = \int_1^x{\frac{1}{t}}dt
$$
$\frac{1}{t}$ 함수는 $(0, \infty)$에서 연속이므로 적분 가능하고, $\forall x \in (0, \infty) \ L'(x) = \frac{1}{x}$ 가 성립한다. $L$은 위의 정리에 따라 자명히 연속이다. 또한 도함수가 항상 양수이므로 이 함수는 strictly increasing이다. (사실 이 함수는 $\ln x$ 임을 이미 모두가 알고있다.)

이 함수에서 다음이 성립하는 것을 쉽게 확인 할 수 있다.

#### Properties

> $\forall a, b \in \mathbb{R^+}$
> 
> **(a)** $L(1) = 0$
> 
> **(b)** $L(ab) = L(a) + L(b)$
> 
> **(c)** $L(\frac{1}{a}) = -L(a)$
> 
> **(d)** $\forall r \in \mathbb{Q} \ L(a^r) = rL(a)$
> 
> **(e)** $L(e) = 1$

#### proof

> **(a)** $L$의 정의로부터 당연하다.
>
> **(b)** $x > 0$일때, chain rule에 의해 $\frac{d}{dx}L(ax) = \frac{1}{ax}a = \frac{1}{x} = L'(x)$이 성립한다.
> 
> 정의역이 interval $(0, \infty)$일때 $\frac{d}{dx}(L(ax) - L(x)) = 0$ 이므로, Lemma 1 에 의해서 $L(ax) = L(x) + C$ 이다.
> 
> $x = 1$ 일때, $L(a) = L(1) + C = C$ 이므로, $L(ax) = L(x) + (a)$이고, **(b)** 를 증명하였다.
> 
> **(c)** $\frac{d}{dx}L(\frac{1}{x}) = -\frac{1}{x} = L'(x)$이고, 이후의 과정은 **(b)** 와 완전히 동일하다.
> 
> **(d)** $n \in \mathbb{N}$ 일때 $L(a^n) = nL(a)$ 인 것은 **(b)** 를 n번 적용하여 얻을 수 있다.
> 
> $L(a^{-n}) = L((a^{-1})^n) = nL(\frac{1}{a})$ 이므로, $n \in \mathbb{Z}$ 일때도 성립한다.
> 
> 마지막으로 $nL(\sqrt[n]{a}) = nL(a^{\frac{1}{n}}) = L(a)$ 이므로,
> 
> $\forall r \in \mathbb{Q} \ L(a^r) = rL(a)$ 이다.
> 
> (사실 $L$은 연속이므로 $r \in \mathbb{R} \ L(a^r) = rL(a)$ 이지만, 아직 실수 지수를 정의하지 않았다. 이는 이후 natural exponential function의 정의 이후 매우 당연해진다.)
> 
> **(e)** $1 = L'(1) = \lim\limits_{n \rightarrow \infty}{\frac{L(1 + \frac{1}{n}) - L(1)}{\frac{1}{n}}} = \lim\limits_{n \rightarrow \infty}{nL(1 + \frac{1}{n})} = \lim\limits_{n \rightarrow \infty}{L((1 + \frac{1}{n})^n)} = L(e)$  
> 
> (연속성을 이용해서 극한을 집어넣었다.)

이제 우리는 $\ln x$일 것이라 심히 의심되는 $L$ 함수를 얻었다. $\ln x$ 에 대한 얘기를 계속하지 않고, 이어서 가보도록 하자.

## Natural Exponential

이제 이 모든 이야기를 마무리 하기 위해 natural exponential 함수를 정의해보자.
#### Inverse Function Theorem

> Suppose $I \subset \mathbb{R}$ is an interval and $f: I \rightarrow \mathbb{R}$ is differentiable on $I$ with $\forall x \in I \ f'(x) \neq 0$.
> 
> Then $f$ is one-to-one on $I$, the inverse function $f^{-1}$ is continuous and differentiable on $f(I)$ with
> 
> $\forall x \in I \ (f^{-1})'(f(x)) = \frac{1}{f'(x)}$


$\forall n \in \mathbb{Z} \ L(e^n) = nL(e) = n$ 이므로, $\lim\limits_{n \rightarrow \infty}{L(e^n)} = \infty$, $\lim\limits_{n \rightarrow -\infty}{L(e^n)} = -\infty$이고, $L$ 함수는 연속이므로 $(-\infty, \infty)$로의 onto funtion이다. 위의 정리에 의해 one-to-one correspondence이다.

이제 이 inverse function을 $\exp(x)$ 라 부르기로 하자. $\exp: \mathbb{R} \rightarrow (0, \infty)$이다.

$\exp(x) = y$ if and only if $x = L(y)$ 임을 기억하자.

Inverse Function Theorem에 의해서

$\exp'(x) = \exp'(L(y)) = \frac{1}{L'(y)} = y = \exp(x)$이다.
즉, $\forall x \in \mathbb{R} \ \exp'(x) = \exp(x)$이다. (이 사실은 추후 미분방정식 등의 분야에서 매우 중요하다.)

$L$ 함수의 성질로부터 다음이 성립함을 아주 간단히 보일 수 있다.

#### Properties

> $\forall x, y \in \mathbb{R}$
> 
> **(a)** $\exp(x + y) = \exp(x)\exp(y)$
>
> **(b)** $\exp(-x) = \frac{1}{\exp(x)}$
> 
> **(c)** $\exp(0) = 1$
> 
> **(d)** $\exp(1) = e$

위 성질들을 **잘 이용하여** 아래 사실들이 성립함을 알 수 있다.

우선 $\forall n \in \mathbb{Z} \ \exp(n) = \exp(1)\exp(1)\cdots\exp(1) = e \cdot e \cdots e = e^n$이다.

또한, $r = \frac{m}{n}, \ m, n \in \mathbb{Q}$ with $n \neq 0$ 일때, $\exp(nr) = \exp(m) = e^m$이다.

마찬가지로 $\exp(nr) = \exp(r)\exp(r)\cdots\exp(r) = (\exp(r))^n$이므로,
$e^m = (\exp(r))^n$이고, $\exp(r) = e^{\frac{m}{n}} = e^r$ 이다.

즉, $r \in \mathbb{Q} \ \exp(r) = e^r$ 이므로, 우리가 정의한 $\exp(x)$ 을 $e^x$의 실수로의 자연스러운 확장으로서 정의할 수 있다. 물론 $L$ 함수는 $\ln x$ 였음이 자명해졌다.

또한 우리는 $(e^x)' = e^x$ 임을 보였다.

## Extra Topic

$(e^x)' = e^x$ 이므로, $e^x$의 Taylor expansion은 $\sum\limits_{k=0}^{\infty}{\frac{1}{k!}x^k}$이다. 이 Taylor series의 radius는 $\infty$ 이므로 $\forall x \in \mathbb{R} \ e^x = \sum\limits_{k=0}^{\infty}{\frac{1}{k!}x^k}$이고, 이를 $e^x$의 정의로서 사용할 수도 있다.

물론 이때에는 $\ln x$를 $e^x$의 역함수로서 정의한다.

$(e^x)' = e^x$임은 series의 term-wise differentiation으로 간단히 증명할 수 있다.