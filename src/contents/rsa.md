---
title: RSA
abstract: 현대 공개키 암호화의 조상격 되는 RSA 암호화에 대해 알아보자
category: Mathematics/Algebra/Number Theory/RSA
---
#### Fermat's theorem
 > Let $p$ be a prime and $p \nmid a$.
 >
 > $a^{p-1} \equiv 1 \pmod{p}$.
 
#### Euler's phi($\phi$) function
>  $\phi(n) =$ # of $k < n \ s.t. \ \gcd(k, n) = 1$

#### Properties
> **(a)** if $p$ is a prime, then $\phi(p) = p-1$
> 
> **(b)** $\phi$ is multiplicative. i.e. if $\gcd(m, n) = 1$ then, $\phi(mn) = \phi(m)\phi(n)$

#### Euler's theorem
> If $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod{n}$

#### RSA
1. p, q
2. n = pq
3. 1 \< k \< phi(n), gcd(k, phi(n)) = 1
4. (n, k): pub
5. M^k = r (mod n)
6. 1 \< j \< phi(n), kj = 1 (mod phi(n)) (j exists gcd() = 1)
7. r^j = M^kj = M^1+phi(n)t = MM^phi(n)t = M (mod n)

## 안전한가?
## 소수 선택