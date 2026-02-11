---
title: Markdown Test
description: 왜 들어오셨나요
icon: simple/markdown
comments: true
---

## h2
!!! note
    hi

### h3
??? abstract
    hi

???+ info
    hi

#### h4
!!! tip "TIP"

!!! success inline
    inline

asdfasdf

## h2_2
asdfasdf

!!! success inline end
    inline end

!!! question

!!! warning

### h3
!!! failure

!!! danger

#### h4
!!! bug

##### h5
!!! example

###### h6
!!! quote

++ctrl+alt+del++

```python title="test.py" linenums="1" hl_lines="2"
import random
import torch
import os
```

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

- [x] first
    * [x] second
- [ ] third

`def`
:   definition


| this | is | table |
| --- | --- | --- |
| element | element | element |


=== "option1"
    hi

=== "option2"
    hello

:fontawesome-regular-face-laugh-wink:

[Home Button](#){ .md-button .md-button--primary }

Lorem ipsum[^1].

[^1]: Lorem ipsum.

$$
\begin{matrix}
&\sum\limits_{i=0}^{\infty}{i}\\
&\beta
\end{matrix}
$$

$\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha + \alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha+
\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha+ \alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha+\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha+\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha+\alpha\alpha\alpha\alpha\alpha+
\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha+\alpha\alpha\alpha\alpha\alpha$

inline $\alpha$ math


```mermaid
xychart-beta
    title "Line Chart"
    x-axis [0, 1, 2, 3, 4, 5]
    y-axis "Value" 0 --> 10
    line [1, 3, 5, 2, 4, 6]
```

??? note "graph (embed)"
    <iframe src="https://www.geogebra.org/graphing/dvz4un8v?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

??? note ""
    <iframe frameborder="0" style="width:100%;height:293px;" src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#G1dca1lONas_upvfbMBc9aqb81N6kCsuCv"></iframe>


$$
\begin{aligned}
f(x) &= \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i x \xi} \, d\xi \\
&= \lim_{n \to \infty} \sum_{k=-n}^{n} \frac{1}{2\pi} \left( \alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha\alpha + \beta\beta\beta\beta\beta\beta\beta\beta\beta\beta\beta\beta \right) \Delta x \\
& \quad + \sum_{j=1}^{m} \sqrt{x_j^2 + y_j^2 + \dots + z_j^2} \allowbreak + \text{This is a very long text to test if the line breaks correctly at the end of the container.}
\end{aligned}
$$

$$
\begin{CD}
V \otimes (W \otimes Z) @>\alpha>> (V \otimes W) \otimes Z \\
@VV id \otimes \beta V @VV \beta \otimes id V \\
V \otimes (Z \otimes W) @>>\alpha> (V \otimes Z) \otimes W
\end{CD}
$$