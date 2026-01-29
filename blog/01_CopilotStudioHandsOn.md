## 🚀 Agenthon, 이제 본격적으로 시작합니다!

---

## 🧠 STEP 1. 에이전트 생성

먼저 **[고급 만들기]** 버튼을 선택한 뒤, 🌏 **언어를 ‘한국어’로 설정**하여 에이전트를 생성해봅시다.

<img width="1622" height="1052" alt="고급 만들기 화면" src="https://github.com/user-attachments/assets/be8f9bfa-d244-440c-9cde-09c36126bf5c" />

<img width="1622" height="1052" alt="언어 설정 화면" src="https://github.com/user-attachments/assets/7ba2c486-ba4b-469a-81cd-771fb31fda61" />

---

## ✍️ STEP 2. 에이전트 지침 설정

아래 내용을 **[지침]** 영역에 그대로 추가해주세요. (에이전트의 성격과 답변 품질을 결정하는 매우 중요한 단계입니다 👀)

```markdown
## 목적
마소 중학교 신규 교원들이 입사 시 궁금한 점을 자유롭게 질문하고,
신속하고 친절한 답변을 받을 수 있도록 지원합니다.

## 일반 가이드라인
- 사용자의 질문 의도를 정확히 파악한 후 답변하세요.
- 관련 데이터 및 참고 자료를 기반으로 답변하세요.
- 정보를 명확하고 이해하기 쉽게 전달하세요.
- 따뜻하고 친근한 어조를 유지하세요.
- 부적절하거나 허용되지 않은 질문은 예의 있게 안내 후 답변을 제한하세요.

## 역할 및 스킬
- 마소 중학교 교원 입사와 관련된 전반적인 문의 대응  
  (복지, 시설, 교원 시스템, IT 지원, 행정 절차 등)
- 필요한 경우 추가 질문을 통해 질문의 맥락을 명확히 파악
- 복잡한 절차나 행정 업무는 단계별로 구조화하여 안내
- 정보가 불충분하거나 모호한 경우 보완 질문을 통해 해결

## 답변 흐름
1. 사용자의 질문을 정확히 이해
2. 내부 데이터 및 참고 자료를 기반으로 답변 생성
3. 추가 정보가 필요한 경우 구체적인 질문 제시
4. 필요 시 단계별 가이드, 예시, 문서 링크 제공

## 예시 질문
- "교직원 복지 혜택에는 어떤 것들이 있나요?"
- "IT 장비 신청 절차를 알고 싶어요."
- "학교 내 주요 시설 위치를 안내해주세요."

## 오류 처리 및 제한
- 제공된 데이터에 없는 정보인 경우  
  → "현재 제공된 자료에는 해당 정보가 없습니다."라고 안내
- 동일한 질문이 반복되더라도 항상 친절하게 재안내

## 마무리 및 피드백
- 사용자의 추가 질문이나 요청을 항상 환영하며,
- 대화 종료 시  
  → "궁금하신 점이 있으면 언제든지 편하게 질문해주세요 😊"
```
<img width="1622" height="1052" alt="지침 설정 화면" src="https://github.com/user-attachments/assets/b1b0ce22-59f7-4d91-ab96-6766835df8ee" />

---

## 📚 STEP 3. 참조 자료 업로드

에이전트가 실제 업무 맥락을 이해하고 보다 정확한 답변을 제공할 수 있도록, **[참조 자료]** 영역에 아래 문서를 업로드해주세요.

📄 **신규 교원 업무 매뉴얼** [신규 교원 업무 매뉴얼.docx](https://github.com/user-attachments/files/24259243/default.docx)

<img width="1622" height="1052" alt="참조 자료 업로드 화면" src="https://github.com/user-attachments/assets/66655a9b-b4ad-4daf-a4cb-d4e644e8b3e8" />

---

## 🔎 STEP 4. 웹 검색 기능 설정

웹 검색 기능을 **활성화**하면 에이전트가 웹 데이터를 기반으로 답변하게 되며, **비활성화**할 경우 웹 데이터를 참조하지 않고 **학습된 데이터만**을 사용합니다.

이번 시나리오에서는  
📌 **사전에 업로드한 참조 자료만을 기반으로 답변하는 에이전트**를 만들기 때문에  
👉 **웹 검색 기능을 비활성화**합니다.

<img width="1622" height="1052" alt="웹 검색 비활성화 설정" src="https://github.com/user-attachments/assets/2b11d083-45fb-43ef-8ec0-b9009c420cf0" />

---

## 🧪 STEP 5. 테스트 세션 실행

이제 **테스트 세션**에서 에이전트가 **참조 자료를 기반으로 정확히 답변하는지** 직접 확인해봅시다.

<img width="1622" height="1052" alt="테스트 세션 실행" src="https://github.com/user-attachments/assets/4cbe396e-8dd5-428a-bd9b-3a635f298ac9" />

---

## 🧰 STEP 6. 도구 추가

에이전트가 상황에 따라 **추가 액션**을 수행할 수 있도록 이제 **도구(Tools)** 를 추가해봅시다.

<img width="1622" height="1052" alt="도구 추가" src="https://github.com/user-attachments/assets/51f339b4-78f2-4563-bb98-c347641983e5" />

---

## ✉️ STEP 7. 이메일 도구 추가

문의 내용을 담당자에게 전달할 수 있도록 **이메일 도구**를 추가합니다.

<img width="1622" height="1052" alt="이메일 도구 추가 1" src="https://github.com/user-attachments/assets/f50c8c54-db3d-400a-ab56-64bba51a59e7" />

<img width="1622" height="1052" alt="이메일 도구 추가 2" src="https://github.com/user-attachments/assets/c8e126ee-cebd-4617-be5f-a4be636cc8ed" />

<img width="1622" height="1052" alt="이메일 도구 추가 3" src="https://github.com/user-attachments/assets/228b4d41-3dae-4106-ad68-20b9ec18763d" />

<img width="1622" height="1052" alt="이메일 도구 추가 4" src="https://github.com/user-attachments/assets/229afbca-e607-48ae-ae39-2c1d1f8486e5" />

<img width="1622" height="1052" alt="이메일 도구 추가 5" src="https://github.com/user-attachments/assets/9d090c02-1e93-40ee-9d5c-dfe5b46f92b9" />

---

## 📝 STEP 8. 이메일 도구 설명 설정

이메일 도구의 **[설명]** 영역에 아래 내용을 입력합니다. 또한, 아래 예시에 포함된 **이메일 주소는 반드시 본인이 수신 가능한 주소로 변경**해주세요.

```markdown
사용자 질문이 참조 자료에서 찾을 수 없거나 답변 하기 애매한 내용일 때 아래 도구를 실행한다.

**메일 작성 규칙**
1. 담당자에게 메일로 문의할 때에는 "메일 보내기" 액션을 이용하여 메일을 대신 발송합니다. 
2. 메일 제목은 "[신규문의] 온보딩 - "문의 주제"" 로 입력합니다. 문의 주제는 사용자가 문의한 내용의 토픽을 의미합니다.
3. 메일 본문에는 사용자의 질문을 정리,요약 하여 발송합니다. 이 때 HTML 형식으로 작성하여 입력합니다.
3. 수신자(To)는 수신자는 아래 담당역역 중에 질문의 내용과 일치하는 주제에 해당하는 사용자의 메일 메일주소를 입력 합니다. 
- IT_환경_설정 : joowonjeong@microsoft.com (본인 이메일)
- 수업운영 : joowonjeong@microsoft.com (본인 이메일)
- 출결_생활기록_학급경영 : joowonjeong@microsoft.com (본인 이메일)
- 학교폭력 : joowonjeong@microsoft.com (본인 이메일)
4. CC에는 Agent에게 질문을 한 사용자의 메일주소를 입력한다. (모를 경우 반드시 물어본다.)
5. 메일 주소 형식은 변경되어서는 안됩니다.메일 메시지가 전송됩니다.
```

위와 같이 **이메일 도구 설명 및 메일 작성 규칙**을 설정합니다.

<img width="1622" height="1052" alt="이메일 도구 설명 설정" src="https://github.com/user-attachments/assets/ad83b328-6aff-482f-9326-7702ff24f195" />


- **추가 세부 정보**에서 사용할 자격 증명을 **제작자 제공 자격 증명**으로 변경 합니다.

<img width="1622" height="1052" alt="스크린샷 2025-12-20 02 36 48" src="https://github.com/user-attachments/assets/6a4dbef4-3d75-47f1-bd95-a4e4a8f1bd9e" />

---

## ➕ CC 입력 필드 추가

앞서 정의한 **메일 작성 규칙**에 따라, 에이전트에게 질문한 **사용자의 이메일 주소를 CC로 포함**해야 합니다.
이를 위해 이메일 도구에 **CC 입력 필드**를 추가합니다.

<img width="1622" height="1052" alt="CC 입력 필드 추가" src="https://github.com/user-attachments/assets/5b9f46ba-ebe4-4ccb-b559-e8a25720bf87" />

---

- **'완료'** 기능은 해당 도구(이메일)가 실행이 완료 된 이후에 동작을 설정하는 기능입니다
- **특정 응답 보내기** 선택 후 아래 와 같이 입력하고 저장까지 완료해봅시다.

```markdown
문의하신 내용은 담당자 확인이 필요하여 메일로 전달 되었습니다. 감사합니다.
```
<img width="1622" height="1052" alt="스크린샷 2025-12-20 01 38 14" src="https://github.com/user-attachments/assets/6c02fbbe-c7fd-414a-89be-72f217324a9a" />
<img width="1622" height="1052" alt="스크린샷 2025-12-20 01 38 33" src="https://github.com/user-attachments/assets/8b8dd10e-261c-4723-8815-ebd4fcbb1960" />
<img width="1622" height="1052" alt="스크린샷 2025-12-20 01 50 53" src="https://github.com/user-attachments/assets/ddd55401-724f-40b3-88b7-d62d01d79ce8" />

---

## 🔐 STEP 10. 보안 설정 & 에이전트 게시

이제 마지막 단계입니다! 에이전트의 **보안 설정을 확인**한 뒤, 실제 사용이 가능하도록 **게시(Publish)** 까지 진행해봅시다.

<img width="1622" height="1052" alt="보안 설정 1" src="https://github.com/user-attachments/assets/79045bbd-0dd1-4160-959f-002655375a09" />

<img width="1622" height="1052" alt="보안 설정 2" src="https://github.com/user-attachments/assets/a07bcab4-455e-45bd-9b29-7c718c693591" />

<img width="1622" height="1052" alt="보안 설정 3" src="https://github.com/user-attachments/assets/74c5eee6-0ee6-4d85-81a6-7b70e2108dcb" />

<img width="1622" height="1052" alt="보안 설정 4" src="https://github.com/user-attachments/assets/279ce859-8493-4cc2-8e87-1e9f69bd2310" />

<img width="1622" height="1052" alt="보안 설정 5" src="https://github.com/user-attachments/assets/a5eb0578-89d1-4c47-84bb-aecb4c8542ef" />

<img width="1622" height="1052" alt="보안 설정 6" src="https://github.com/user-attachments/assets/1bbe5cf3-d8c3-4d9b-84b7-77f3f2dd85ab" />

<img width="1622" height="1052" alt="보안 설정 7" src="https://github.com/user-attachments/assets/c269d6bd-a7f4-448a-9f5e-20f6231b6ce5" />

---

## 🌐 STEP 11. 데모 웹사이트로 배포

게시가 완료되었다면, 이제 **데모 웹사이트(Demo Website)** 로 에이전트를 배포해봅시다.

<img width="1622" height="1052" alt="데모 웹사이트 배포" src="https://github.com/user-attachments/assets/e246c0f3-85c7-43a8-ab5e-8c866ea0252e" />

---

## 💬 STEP 12. 환영 메시지 & 대화 스타터 설정

사용자가 에이전트와 자연스럽게 대화를 시작할 수 있도록 **환영 메시지**와 **대화 스타터**를 설정해줍니다.

### 🔹 환영 메시지
```markdown
안녕하세요 😎 

마소중학교 무물 에이전트입니다.
```

```markdown
우리 학교 조직 구성원에 대해 알려줘.
복무/휴가/연수 관련 내용을 알려줘.
IT관련 도움이 필요해.
```

<img width="1622" height="1052" alt="환영 메시지 및 대화 스타터 설정 완료" src="https://github.com/user-attachments/assets/62c01977-36cf-4a7c-a052-7c1f83d20269" />

---

## ▶️ STEP 13. 데모 웹사이트 열기

설정이 모두 완료되었다면, **Open demo website** 버튼을 선택하여 실제 사용자 관점에서 에이전트를 실행해봅시다.

---

## 🧪 STEP 14. 에이전트 테스트

이제 다양한 질문을 입력해보며 에이전트가 **의도에 맞게 응답하는지**, **참조 자료와 도구를 올바르게 활용하는지** 확인합니다.

<img width="1622" height="1052" alt="에이전트 테스트 화면 1" src="https://github.com/user-attachments/assets/76108dc0-5308-4562-9dfc-b54d26dbdd59" />

<img width="1622" height="1052" alt="에이전트 테스트 화면 2" src="https://github.com/user-attachments/assets/9837df22-9b33-426e-bc1d-ab70dd0b1df5" />

<img width="1053" height="744" alt="에이전트 테스트 화면 3" src="https://github.com/user-attachments/assets/5e234662-1b3d-4892-b4b9-0a32ae42b901" />

---

## 🎉 마무리

이렇게 해서 **마소중학교 ‘무물’ 에이전트**를 간단하게 완성해보았습니다 🙌

이제 여러분의 차례입니다. 👉 **우리 학교에 꼭 필요한 에이전트는 무엇일까요?**

직접 고민하고, 직접 만들어보세요!

💡 **TIP - Vibe Coding**  
**[Microsoft 365 Copilot](https://m365copilot.com)** 과 함께 아이디어를 대화하듯 발전시키며 만들어보세요.

혼자서 모든 걸 고민할 필요는 없습니다. 생각을 Copilot과 나누다 보면 더 빠르고, 더 완성도 높은 에이전트를 만들 수 있을 거예요 🚀
