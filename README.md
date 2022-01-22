## 작업 전 유의할 사항

env에 담겨있는 sentry DSN을 변경합니다. 현재 공백으로 들어가있으니, sentry 프로젝트를 생성한 뒤 넣어주세요.

token값은 모든 프로젝트가 동일합니다. 이 부분은 local에서 전달받는 방법을 선택하시거나, sentry wizard를 통해 sentryclirc 파일만을 생성해주세요.

env.development file이 올라가있는 이유는 dev 환경에서 prod와 괴리를 줄이는 코드를 작성할 수 있도록 하는 의도입니다.

local로 전달받아야 할 값들을 env로 관리할지는 각 프로젝트 내에서 결정해주시면 됩니다.

```
npx @sentry/wizard -i nextjs or local에서 전달받기
```

## Getting Started

```bash
yarn
yarn dev or yarn build
```

## 목적

Keplr - Cosmos 기반의 프로젝트를 진행하는데, 초기세팅이 번거롭고 귀찮은 사람들을 위해 만들어진 사내 repo입니다.

MUI-Next-Sentry-Cosm 조합으로 완성될 템플릿 정도로 생각해주시면 되겠습니다.

위 라이브러리 조합은 논의를 통해 언제든 달라질 수 있습니다.

## 변경 예정사항

이것저것 추가되거나 변경될 수 있는 repo입니다.

cosmos 기반의 프로젝트를 경험하며 회고하고, 초기 세팅에 무엇이 필요했을지 잘 기록해뒀다 바꿔봅시다!
