---
title: RSA
abstract: 현대 공개키 암호화의 조상격 되는 RSA 암호화에 대해 알아보자
category: Mathematics/Algebra/Number Theory/RSA
---
## Prerequisites

#### Fermat's theorem
 > Let $p$ be a prime and $p \nmid a$.
 >
 > $a^{p-1} \equiv 1 \pmod{p}$.

페르마 소정리는 설명하기에는 너무 유명하다.

RSA 암호화에서는 페르마 소정리의 일반화된 버전인 오일러 정리를 이용한다.

우선 오일러 피(phi) 함수를 소개한다.
#### Euler's phi($\phi$) function
>  $\phi(n) =$ # of $k < n \ s.t. \ \gcd(k, n) = 1$

(\#은 개수라는 뜻 ㅎ)

$\phi(n)$은 $n$보다 작으면서, $n$과 서로소인 수의 개수를 나타낸다.

오일러 피 함수는 다음의 성질이 성립한다.
#### Properties
> **(a)** if $p$ is a prime, then $\phi(p) = p-1$
> 
> **(b)** $\phi$ is **multiplicative**. i.e. if $\gcd(m, n) = 1$ then, $\phi(mn) = \phi(m)\phi(n)$

참고로 이 multiplicative라는 성질은 정수론에서 아주 중요한 역할을 맡는다.

이제 오일러 정리를 알아보자.
#### Euler's theorem
> If $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod{n}$

$n$이 소수일때, $\phi(n) = n - 1$ 이므로, 페르마 소정리를 포함하는 정리임을 알수있다.


이제 RSA가 어떻게 동작하는지 알아보자.

## RSA

> **1.** 두 소수(일반적으로 아주 큰) $p, q$ 를 선택한다.
> 
> **2.** 두 소수의 곱 $n = pq$을 계산한다.
> 
> **3.** $\phi(n)$을 계산한다.
> 
>  이때 위에서 언급한 $\phi$ 함수의 두가지 성질 덕분에 $\phi(n) = \phi(pq) = \phi(p)\phi(q) = (p-1)(q-1)$ 임을 간단히 알 수 있다.
>
> **4.** $1 < k < \phi(n)$, $\gcd(k, \phi(n)) = 1$인 $k$를 고른다.
>  
> 이 $(n, k)$쌍은 **public key**가 된다!
>  
>  **5.** 이제 암호화 하고자 하는 문장(수로 표현한)을 $M$이라 하자.
>
> 중요한 점은, 우리는 $\pmod{n}$ 상에서 사용할 것이기 때문에 $M$은 $n$보다 작아야 한다는 것이다.
> $M$을 $n$보다 작아지도록 숫자를 자르는 방식 등을 채택한다. (123456789 -> 1234 / 5678 / 9)
>
> **6.** $M^k \equiv r \pmod{n}$ 이라 할때, 암호화된 문장은 $r$이 된다.
>
> **7.** $1 < j < \phi(n)$인 $j$중에서 $kj \equiv 1 \pmod{\phi(n)}$인 $j$를 고른다.
> 
> 위에서 서술했듯이 이러한 $j$는 딱 하나 존재한다.
>
> **8.** $r^j \equiv (M^k)^j \equiv M^{kj} \pmod{n}$이고, 어떤 $t$에 대해 $M^{kj}\equiv M^{1 + t\phi(n)} \equiv M \cdot (M^{\phi(n)})^t \pmod{n}$이다. 오일러 정리에 의해 $M^{\phi(n)} \equiv 1 \pmod{n}$이므로, $M \cdot (M^{\phi(n)})^t \equiv M \pmod{n}$이다.

## How does it work?

위의 작동과정만 봐서는 잘 이해가 가지 않는다.

이는 다른 기존의 암호화 방식들과 아주 큰 차이점이 하나 있기 때문인데, 그건 바로 RSA는 **공개키 암호화**라는 것이다.

기존에 사용하던 암호화 방식은 암호화 키와 복호화 키가 동일했다.

![](4987523F-BDDA-4249-A112-B1B3A92B2229.jpg)