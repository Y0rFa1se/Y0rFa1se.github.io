예전에 Calculus 공부하면서 궁금했던건데

벡터함수의 전미분(Total Derivative)의 Chain Rule은

$$\frac{dz}{dx} = \frac{\partial z}{\partial u}\frac{du}{dx} + \frac{\partial z}{\partial v}\frac{dv}{dx}$$
$$(z = f(u(x), v(x)))$$

아고 편미분(Partial Derivative)의 Chain Rule은

$$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x}$$
$$(z = f(u(x), v(x)))$$

이잖슴

근데 갑자기

$$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial x}(\frac{\partial x}{\partial x} = 1) + \frac{\partial z}{\partial y}\frac{\partial y}{\partial  x}$$

$$(z = f(x, y), y = g(x))$$

이런 식이 떠오른거임

뭔가 이상하지 않음?

이대로라면

$$\frac{\partial z}{\partial x} - \frac{\partial z}{\partial x} = 0 = \frac{\partial z}{\partial y}\frac{\partial y}{\partial x}$$

$$\frac{\partial z}{\partial y}\frac{\partial y}{\partial x} = 0$$

이 되는데 이건 말이 안되지

$z$ 가 $x, y$ 에 대한 함수고 $y$가 $x$에 대한 함수이기만 하면 $\frac{\partial z}{\partial y}\frac{\partial y}{\partial x} = 0$ 이라는건데 얘는 딱봐도 반례가 넘침

근데 이게 왜 틀렸는지 말할 수 있는 사람은 아마 별로 없지 않을까? 이런생각을 해본적 없을테니까

- 이 식이 틀린거임?

ㄴㄴ 아니지 Chain Rule의 성질을 그대로 썼는데

- 그럼 진짜 모든 $z = f(x, g(x))$꼴 함수가 $\frac{\partial z}{\partial y}\frac{\partial y}{\partial x} = 0$ 라는거??

당연히 아니다

- 그럼 벡터미적분이 틀린건가???

그럴리가 없지

????

답이 뭐냐면

$$\frac{\partial z}{\partial x} \neq \frac{\partial z}{\partial x}$$

이었던거임

????????

정확히는 앞에서 나온 $\frac{\partial z}{\partial x}$랑 뒤에서 나온 $\frac{\partial z}{\partial x}$랑 의미가 다름

뒤에서 나온 $\frac{\partial z}{\partial x}$는 $z$식에서 $y$를 상수로 보고(실제로 $y$는 $x$에 대한 함수이지만 그냥 $y$라는 변수로 취급한다는 의미) 미분하는거고

앞에서 나온 $\frac{\partial z}{\partial x}$는 변수 $z$자체를 $x$로 미분한다는 뜻임

그래서 앞에있는 $\frac{\partial z}{\partial x}$는 Chain Rule을 적용해야 하는거고

뒤에서 나온 $\frac{\partial z}{\partial x}$는 Chain Rule을 적용하면 안되는거임

그냥 두개가 우연히 표기가 똑같았을뿐