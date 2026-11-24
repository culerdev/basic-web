// Dữ liệu mẫu: mỗi chủ đề có nhiều Section, mỗi Section có nhiều bài học.
const topics = [
    {
        id: "home", title: "At Home", icon: "🏠", level: "A1", duration: 5,
        description: "Học cách giao tiếp với người thân trong gia đình.",
        sections: [
            { title: "Section 1", lessons: [
                {title:"Greeting Family",level:"A1",parts:10,text:"Anna: Hello! It's nice to meet you.\\nBen: Good morning, Mom. How are you today?\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Talking About Home",level:"A1",parts:10,text:"Person A: Let's talk about talking about home.\\nPerson B: Our house is small but very comfortable.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Daily Activities",level:"A1",parts:8,text:"Person A: Let's talk about daily activities.\\nPerson B: I usually get up at seven o'clock.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"At Breakfast",level:"A1",parts:9,text:"Person A: Let's talk about at breakfast.\\nPerson B: Would you like some eggs for breakfast?\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Talking About Family",level:"A1",parts:10,text:"Anna: Hello! It's nice to meet you.\\nBen: I live with my parents and my younger brother.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."}
            ]},
            { title: "Section 2", lessons: [
                {title:"Cleaning the House",level:"A1",parts:8,text:"Person A: Let's talk about cleaning the house.\\nPerson B: I clean my room every Saturday.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"My Bedroom",level:"A1",parts:8,text:"Person A: Let's talk about my bedroom.\\nPerson B: There is a desk next to my bed.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Household Chores",level:"A1",parts:10,text:"Person A: Let's talk about household chores.\\nPerson B: Can you help me wash the dishes?\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Cooking at Home",level:"A1",parts:9,text:"Person A: Let's talk about cooking at home.\\nPerson B: Dad is cooking dinner in the kitchen.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Evening Activities",level:"A1",parts:8,text:"Person A: Let's talk about evening activities.\\nPerson B: We usually watch television after dinner.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."}
            ]},
            { title: "Section 3", lessons: [
                {title:"In the Living Room",level:"A1",parts:8,text:"Person A: Let's talk about in the living room.\\nPerson B: The sofa is in front of the television.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Describing My House",level:"A1",parts:9,text:"Person A: Let's talk about describing my house.\\nPerson B: My house has three bedrooms and a garden.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Weekend at Home",level:"A1",parts:8,text:"Friend: How was your day yesterday?\\nSpeaker: I like to relax at home on Sundays.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"Talking About Pets",level:"A1",parts:8,text:"Person A: Let's talk about talking about pets.\\nPerson B: We have a small dog called Max.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Review: At Home",level:"A1",parts:10,text:"Person A: Let's talk about review: at home.\\nPerson B: I enjoy spending time with my family at home.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."}
            ]}
        ]
    },
    {
        id: "restaurant", title: "At the Restaurant", icon: "🍽️", level: "A1", duration: 7,
        description: "Học cách gọi món và giao tiếp tại nhà hàng.",
        sections: [
            {title:"Section 1", lessons:[
                {title:"Making a Reservation",level:"A1",parts:10,text:"Customer: Hello. Could you help me, please?\\nWaiter: I'd like to reserve a table for two, please.\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Reading the Menu",level:"A1",parts:8,text:"Customer: Hello. Could you help me, please?\\nWaiter: What would you recommend from this menu?\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Ordering Food",level:"A1",parts:10,text:"Customer: Hello. Could you help me, please?\\nWaiter: I'd like a chicken sandwich and a glass of water.\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Ordering Drinks",level:"A1",parts:8,text:"Customer: Hello. Could you help me, please?\\nWaiter: Could I have an orange juice, please?\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Special Requests",level:"A1",parts:9,text:"Person A: Let's talk about special requests.\\nPerson B: Could you make this without onions, please?\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."}
            ]},
            {title:"Section 2", lessons:[
                {title:"Asking About Prices",level:"A1",parts:8,text:"Person A: Let's talk about asking about prices.\\nPerson B: How much is the soup of the day?\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"The Food Is Ready",level:"A1",parts:8,text:"Customer: Hello. Could you help me, please?\\nWaiter: Excuse me, I think this is our order.\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Complaining Politely",level:"A2",parts:10,text:"Person A: Let's talk about complaining politely.\\nPerson B: I'm sorry, but my food is a little cold.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Asking for the Bill",level:"A1",parts:8,text:"Customer: Hello. Could you help me, please?\\nWaiter: Could we have the bill, please?\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Paying the Bill",level:"A1",parts:8,text:"Customer: Hello. Could you help me, please?\\nWaiter: Can I pay by credit card?\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."}
            ]},
            {title:"Section 3", lessons:[
                {title:"Lunch with Friends",level:"A1",parts:9,text:"Customer: Hello. Could you help me, please?\\nWaiter: Shall we meet for lunch at twelve?\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"A Busy Restaurant",level:"A2",parts:10,text:"Customer: Hello. Could you help me, please?\\nWaiter: The restaurant is full, so we may have to wait.\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Ordering Dessert",level:"A1",parts:8,text:"Customer: Hello. Could you help me, please?\\nWaiter: I'd like a slice of chocolate cake.\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Takeaway Food",level:"A1",parts:8,text:"Customer: Hello. Could you help me, please?\\nWaiter: Can I get this meal to take away?\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."},
                {title:"Restaurant Review",level:"A2",parts:10,text:"Customer: Hello. Could you help me, please?\\nWaiter: The service was excellent and the food was delicious.\\nCustomer: That sounds good. Could I have that, please?\\nWaiter: Certainly. I'll bring it to your table shortly."}
            ]}
        ]
    },
    {
        id: "people", title: "Meeting New People", icon: "👋", level: "A1", duration: 5,
        description: "Luyện cách chào hỏi và làm quen với người mới.",
        sections: [
            {title:"Section 1",lessons:[
                {title:"Saying Hello",level:"A1",parts:8,text:"Anna: Hello! It's nice to meet you.\\nBen: Hi, my name is Anna. Nice to meet you.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Introducing Yourself",level:"A1",parts:8,text:"Anna: Hello! It's nice to meet you.\\nBen: I'm from Vietnam and I study English.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Asking Names",level:"A1",parts:8,text:"Anna: Hello! It's nice to meet you.\\nBen: Sorry, could you tell me your name again?\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Where Are You From?",level:"A1",parts:8,text:"Anna: Hello! It's nice to meet you.\\nBen: Where are you from? I'm from Da Nang.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Saying Goodbye",level:"A1",parts:8,text:"Anna: Hello! It's nice to meet you.\\nBen: It was nice meeting you. See you soon.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."}
            ]},
            {title:"Section 2",lessons:[
                {title:"Talking About Hobbies",level:"A1",parts:9,text:"Anna: Hello! It's nice to meet you.\\nBen: I enjoy listening to music in my free time.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Talking About Work",level:"A2",parts:9,text:"Person A: Let's talk about talking about work.\\nPerson B: I work in an office near the city center.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Making Small Talk",level:"A2",parts:10,text:"Anna: Hello! It's nice to meet you.\\nBen: It's a lovely day, isn't it?\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Exchanging Contact Details",level:"A1",parts:8,text:"Person A: Let's talk about exchanging contact details.\\nPerson B: Would you like to exchange phone numbers?\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Meeting a Classmate",level:"A1",parts:8,text:"Friend: How was your day yesterday?\\nSpeaker: Are you in the English class too?\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."}
            ]},
            {title:"Section 3",lessons:[
                {title:"Talking About Family",level:"A1",parts:8,text:"Anna: Hello! It's nice to meet you.\\nBen: I have two sisters and one younger brother.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Favorite Movies",level:"A2",parts:9,text:"Anna: Hello! It's nice to meet you.\\nBen: My favorite movies are comedies.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Inviting Someone",level:"A2",parts:9,text:"Person A: Let's talk about inviting someone.\\nPerson B: Would you like to get coffee sometime?\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Accepting an Invitation",level:"A1",parts:8,text:"Anna: Hello! It's nice to meet you.\\nBen: That sounds great. What time shall we meet?\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Review: New People",level:"A1",parts:10,text:"Anna: Hello! It's nice to meet you.\\nBen: It was great talking with you today.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."}
            ]}
        ]
    },
    {
        id: "yesterday", title: "What Did You Do Yesterday?", icon: "📅", level: "A2", duration: 8,
        description: "Luyện nghe về các hoạt động đã diễn ra hôm qua.",
        sections: [
            {title:"Section 1",lessons:[
                {title:"Yesterday Morning",level:"A2",parts:9,text:"Friend: How was your day yesterday?\\nSpeaker: I woke up early and made breakfast.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"Going to School",level:"A2",parts:9,text:"Friend: How was your day yesterday?\\nSpeaker: I went to school by bus yesterday.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"After Class",level:"A2",parts:9,text:"Friend: How was your day yesterday?\\nSpeaker: After class, I met my friends for coffee.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"Shopping Yesterday",level:"A2",parts:9,text:"Friend: How was your day yesterday?\\nSpeaker: I bought a new shirt at the shopping mall.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"Last Night",level:"A2",parts:9,text:"Friend: How was your day yesterday?\\nSpeaker: I watched a movie with my family last night.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."}
            ]},
            {title:"Section 2",lessons:[
                {title:"A Busy Day",level:"A2",parts:10,text:"Friend: How was your day yesterday?\\nSpeaker: I was busy all day, so I went to bed early.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"Weekend Activities",level:"A2",parts:9,text:"Friend: How was your day yesterday?\\nSpeaker: We visited our grandparents on Sunday.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"A Trip with Friends",level:"A2",parts:10,text:"Friend: How was your day yesterday?\\nSpeaker: We drove to the beach and took many photos.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"Talking About the Weather",level:"A2",parts:8,text:"Friend: How was your day yesterday?\\nSpeaker: It rained yesterday, so we stayed inside.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"An Unexpected Event",level:"B1",parts:10,text:"Person A: Let's talk about an unexpected event.\\nPerson B: I missed the bus because I left home late.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."}
            ]},
            {title:"Section 3",lessons:[
                {title:"My Best Day",level:"A2",parts:9,text:"Friend: How was your day yesterday?\\nSpeaker: My birthday was wonderful because my friends came.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"A Day Off",level:"A2",parts:8,text:"Friend: How was your day yesterday?\\nSpeaker: I slept late and read a book at home.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"Yesterday at Work",level:"B1",parts:10,text:"Friend: How was your day yesterday?\\nSpeaker: I finished the report before the meeting started.\\nFriend: Really? What did you do after that?\\nSpeaker: I went home and relaxed for the rest of the evening."},
                {title:"Asking Follow-up Questions",level:"A2",parts:9,text:"Person A: Let's talk about asking follow-up questions.\\nPerson B: What did you do after you got home?\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Review: Past Activities",level:"A2",parts:10,text:"Person A: Let's talk about review: past activities.\\nPerson B: Yesterday was busy, but I had a good time.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."}
            ]}
        ]
    },
    {
        id: "phone", title: "Making a Phone Call", icon: "📞", level: "A2", duration: 7,
        description: "Học các mẫu câu thường dùng khi gọi điện thoại.",
        sections: [
            {title:"Section 1",lessons:[
                {title:"Making a Call",level:"A2",parts:9,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Hello, may I speak to Mr. Brown, please?\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Answering the Phone",level:"A2",parts:9,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Hello, this is Linda speaking.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Asking Someone to Wait",level:"A2",parts:8,text:"Person A: Let's talk about asking someone to wait.\\nPerson B: Could you hold on for a moment, please?\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Leaving a Message",level:"A2",parts:9,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Please tell him that I called.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Taking a Message",level:"A2",parts:9,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Can I take a message for her?\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."}
            ]},
            {title:"Section 2",lessons:[
                {title:"Making an Appointment",level:"A2",parts:10,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: I'd like to make an appointment for Friday.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"A Wrong Number",level:"A2",parts:8,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: I'm sorry, I think you have the wrong number.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"A Bad Connection",level:"A2",parts:9,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Sorry, I can't hear you very clearly.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Calling Customer Service",level:"B1",parts:10,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: I'm calling to ask about my recent order.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Confirming Details",level:"A2",parts:9,text:"Person A: Let's talk about confirming details.\\nPerson B: Let me confirm the time and address.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."}
            ]},
            {title:"Section 3",lessons:[
                {title:"A Call from a Friend",level:"A2",parts:9,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Are you free to meet this afternoon?\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Calling in an Emergency",level:"B1",parts:10,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Please send help to this address immediately.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Calling the Doctor",level:"A2",parts:9,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: I'd like to book an appointment with the doctor.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Ending a Phone Call",level:"A2",parts:8,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Thanks for your help. I'll talk to you soon.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."},
                {title:"Review: Phone Calls",level:"A2",parts:10,text:"Caller: Hello. I'm calling because I need some help.\\nReceiver: Thank you for calling. Have a nice day.\\nCaller: Thank you. Could you tell me what I should do next?\\nReceiver: Of course. I'll help you with that."}
            ]}
        ]
    },
    {
        id: "job", title: "Applying for a Job", icon: "💼", level: "B1", duration: 10,
        description: "Luyện nghe hội thoại trong buổi phỏng vấn xin việc.",
        sections: [
            {title:"Section 1",lessons:[
                {title:"Introducing Yourself",level:"B1",parts:10,text:"Anna: Hello! It's nice to meet you.\\nBen: Thank you for inviting me to this interview.\\nAnna: That sounds interesting. Tell me more about yourself.\\nBen: Sure. I hope we can talk again soon."},
                {title:"Talking About Experience",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I have two years of experience in customer service.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Describing Your Skills",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I'm good at solving problems and working in a team.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Why Do You Want This Job?",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I want this job because I enjoy helping people.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Your Strengths",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: One of my strengths is that I learn quickly.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."}
            ]},
            {title:"Section 2",lessons:[
                {title:"Your Weaknesses",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I'm working on improving my public speaking skills.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Salary Expectations",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I would like to discuss a salary based on the role.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Working in a Team",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I believe good communication is important in a team.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Asking the Interviewer",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: Could you tell me more about the daily responsibilities?\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Interview Follow-up",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: Thank you for your time. I look forward to hearing from you.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."}
            ]},
            {title:"Section 3",lessons:[
                {title:"Arranging an Interview",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: Would Tuesday morning be convenient for you?\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Talking About Education",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I graduated with a degree in information technology.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Handling Difficult Questions",level:"B1",parts:11,text:"Person A: Let's talk about handling difficult questions.\\nPerson B: I learned a lot from that challenge and improved my approach.\\nPerson A: I understand. Could you explain that one more time?\\nPerson B: Of course. I'm happy to help."},
                {title:"Receiving a Job Offer",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I'm pleased to accept the offer. Thank you very much.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."},
                {title:"Review: Job Interview",level:"B1",parts:10,text:"Interviewer: Could you tell me a little about yourself?\\nCandidate: I'm excited about the opportunity to join your company.\\nInterviewer: Thank you. Can you give me an example?\\nCandidate: Certainly. I always try to learn and do my best."}
            ]}
        ]
    }
];

let selectedLevel = "ALL";
const lessonList = document.getElementById("lesson-list");
const searchInput = document.getElementById("search-input");
const lessonCount = document.getElementById("lesson-count");

function showTopics() {
    const keyword = searchInput.value.toLowerCase().trim();
    const filteredTopics = topics.filter(topic => {
        const matchLevel = selectedLevel === "ALL" || topic.level === selectedLevel;
        const matchSearch = topic.title.toLowerCase().includes(keyword) ||
            topic.description.toLowerCase().includes(keyword);
        return matchLevel && matchSearch;
    });

    lessonList.innerHTML = "";
    lessonCount.textContent = filteredTopics.length + " chủ đề";

    filteredTopics.forEach(topic => {
        let totalLessons = 0;
        topic.sections.forEach(section => totalLessons += section.lessons.length);

        const card = document.createElement("article");
        card.className = "lesson-card";
        card.innerHTML = `
            <div class="lesson-icon">${topic.icon}</div>
            <span class="level-tag">${topic.level}</span>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="lesson-meta">
                <span>◷ ${topic.duration} phút</span>
                <span>📚 ${totalLessons} bài học</span>
            </div>
            <a class="start-btn" href="lesson-detail.html?topic=${topic.id}">Bắt đầu học →</a>
        `;
        lessonList.appendChild(card);
    });

    if (filteredTopics.length === 0) {
        lessonList.innerHTML = "<p>Không tìm thấy chủ đề phù hợp.</p>";
    }
}

document.querySelectorAll(".level-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".level-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        selectedLevel = this.dataset.level;
        showTopics();
    });
});

searchInput.addEventListener("input", showTopics);
showTopics();
