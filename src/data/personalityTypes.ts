import { Brain, Heart, Shield, Compass } from 'lucide-react';
import { PersonalityType } from '../types';

export const personalityData: Record<string, PersonalityType> = {
    intj: {
        id: 'intj',
        code: 'INTJ',
        name: 'The Architect',
        title: 'The Architect',
        tagline: 'Imaginative and strategic thinkers, with a plan for everything.',
        image: '/src/assets/characters/intj.png',
        description: 'Architects are imaginative and strategic thinkers, with a plan for everything. They approach the world with analytical precision and are driven by their vision of how things could be improved. INTJs are known for their ability to see patterns and connections that others miss, making them excellent problem-solvers and planners.',
        color: 'purple',
        traits: [
            { name: 'Introverted', value: 72 },
            { name: 'Intuitive', value: 85 },
            { name: 'Thinking', value: 78 },
            { name: 'Judging', value: 68 }
        ],
        strengths: [
            'Strategic thinking and planning',
            'Independence and self-confidence',
            'Strong analytical skills',
            'Determination and perseverance',
            'Open-minded about new ideas'
        ],
        weaknesses: [
            'Can be overly critical',
            'May struggle with emotions',
            'Sometimes too independent',
            'Can appear arrogant',
            'Impatient with inefficiency'
        ],
        careerMatches: [
            'Software Engineer',
            'Data Scientist',
            'Management Consultant',
            'Architect',
            'Research Scientist',
            'Systems Analyst'
        ],
        relationships: 'INTJs value intelligence and honesty in relationships. They may struggle with expressing emotions but are deeply loyal to those they care about. They need partners who respect their independence and intellectual pursuits.'
    },
    intp: {
        id: 'intp',
        code: 'INTP',
        name: 'The Logician',
        title: 'The Logician',
        tagline: 'Innovative inventors with an unquenchable thirst for knowledge.',
        image: '/src/assets/characters/intp.png',
        description: 'Logicians are innovative inventors with an unquenchable thirst for knowledge. They pride themselves on their unique perspective and vigorous intellect. They love patterns, and spotting discrepancies between statements could almost be described as a hobby, making it a bad idea to lie to a Logician.',
        color: 'purple',
        traits: [
            { name: 'Introverted', value: 65 },
            { name: 'Intuitive', value: 80 },
            { name: 'Thinking', value: 82 },
            { name: 'Prospecting', value: 70 }
        ],
        strengths: [
            'Great analysts and abstract thinkers',
            'Imaginative and original',
            'Open-minded',
            'Enthusiastic',
            'Objective'
        ],
        weaknesses: [
            'Very private and withdrawn',
            'Insensitive',
            'Absent-minded',
            'Condescending',
            'Loathe rules and guidelines'
        ],
        careerMatches: [
            'Computer Programmer',
            'Mathematician',
            'Systems Analyst',
            'Scientist',
            'Technical Writer',
            'Forensic Scientist'
        ],
        relationships: 'INTPs are intellectual and independent partners. They may be shy and withdrawn at first but are very loyal once committed. They need a partner who can match their intellect and give them space.'
    },
    entj: {
        id: 'entj',
        code: 'ENTJ',
        name: 'The Commander',
        title: 'The Commander',
        tagline: 'Bold, imaginative and strong-willed leaders, always finding a way - or making one.',
        image: '/src/assets/characters/entj.png',
        description: 'Commanders are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. However, Commanders are also characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they have set for themselves.',
        color: 'purple',
        traits: [
            { name: 'Extraverted', value: 75 },
            { name: 'Intuitive', value: 70 },
            { name: 'Thinking', value: 85 },
            { name: 'Judging', value: 80 }
        ],
        strengths: [
            'Efficient',
            'Energetic',
            'Self-Confident',
            'Strong-willed',
            'Strategic thinkers'
        ],
        weaknesses: [
            'Stubborn and dominant',
            'Intolerant',
            'Impatient',
            'Arrogant',
            'Poor handling of emotions'
        ],
        careerMatches: [
            'Executive',
            'Lawyer',
            'Entrepreneur',
            'Management Consultant',
            'University Professor',
            'Judge'
        ],
        relationships: 'ENTJs are dominant and challenging partners. They take their relationships seriously and want to win at them. They need a partner who is self-confident and can stand up to them.'
    },
    entp: {
        id: 'entp',
        code: 'ENTP',
        name: 'The Debater',
        title: 'The Debater',
        tagline: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
        image: '/src/assets/characters/entp.png',
        description: 'Debaters are the ultimate devil\'s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. They don\'t do this because they are trying to achieve some deeper purpose or strategic goal, but for the simple reason that it is fun.',
        color: 'purple',
        traits: [
            { name: 'Extraverted', value: 70 },
            { name: 'Intuitive', value: 80 },
            { name: 'Thinking', value: 75 },
            { name: 'Prospecting', value: 85 }
        ],
        strengths: [
            'Knowledgeable',
            'Quick thinker',
            'Original',
            'Excellent brainstormer',
            'Charismatic'
        ],
        weaknesses: [
            'Very argumentative',
            'Insensitive',
            'Intolerant',
            'Can find it difficult to focus',
            'Dislike practical matters'
        ],
        careerMatches: [
            'Entrepreneur',
            'Stockbroker',
            'Politician',
            'Marketing Manager',
            'Consultant',
            'Creative Director'
        ],
        relationships: 'ENTPs are spontaneous and exciting partners. They love to debate and explore new ideas. They need a partner who is patient and can keep up with their energy.'
    },
    infj: {
        id: 'infj',
        code: 'INFJ',
        name: 'The Advocate',
        title: 'The Advocate',
        tagline: 'Quiet and mystical, yet very inspiring and tireless idealists.',
        image: '/src/assets/characters/infj.png',
        description: 'Advocates are creative nurturers with a strong sense of idealism and morality. They take concrete steps to realize their goals and make a lasting positive impact. INFJs have a unique ability to intuit others\' emotions and motivations, often understanding people better than they understand themselves.',
        color: 'green',
        traits: [
            { name: 'Introverted', value: 68 },
            { name: 'Intuitive', value: 82 },
            { name: 'Feeling', value: 75 },
            { name: 'Judging', value: 70 }
        ],
        strengths: [
            'Deep empathy and understanding',
            'Strong values and principles',
            'Creative problem-solving',
            'Insightful and perceptive',
            'Dedicated to helping others'
        ],
        weaknesses: [
            'Can be overly sensitive',
            'May struggle with criticism',
            'Prone to burnout',
            'Sometimes too idealistic',
            'Difficulty setting boundaries'
        ],
        careerMatches: [
            'Counselor/Therapist',
            'Writer',
            'HR Manager',
            'Teacher',
            'Social Worker',
            'UX Designer'
        ],
        relationships: 'INFJs seek deep, meaningful connections and value authenticity in relationships. They are caring and supportive partners who invest heavily in the people they love. They need partners who appreciate their depth and complexity.'
    },
    infp: {
        id: 'infp',
        code: 'INFP',
        name: 'The Mediator',
        title: 'The Mediator',
        tagline: 'Poetic, kind and altruistic people, always eager to help a good cause.',
        image: '/src/assets/characters/infp.png',
        description: 'Mediators are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, Mediators have an inner flame and passion that can truly shine.',
        color: 'green',
        traits: [
            { name: 'Introverted', value: 75 },
            { name: 'Intuitive', value: 70 },
            { name: 'Feeling', value: 85 },
            { name: 'Prospecting', value: 80 }
        ],
        strengths: [
            'Idealistic',
            'Seek and value harmony',
            'Open-minded and flexible',
            'Very creative',
            'Passionate and energetic'
        ],
        weaknesses: [
            'Too idealistic',
            'Too altruistic',
            'Impractical',
            'Dislike dealing with data',
            'Take things personally'
        ],
        careerMatches: [
            'Writer',
            'Counselor',
            'Social Worker',
            'Teacher',
            'Psychologist',
            'Artist'
        ],
        relationships: 'INFPs are hopeless romantics. They dream of the perfect relationship and may struggle with reality. They are deeply caring and loyal partners.'
    },
    enfj: {
        id: 'enfj',
        code: 'ENFJ',
        name: 'The Protagonist',
        title: 'The Protagonist',
        tagline: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
        image: '/src/assets/characters/enfj.png',
        description: 'Protagonists are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world.',
        color: 'green',
        traits: [
            { name: 'Extraverted', value: 80 },
            { name: 'Intuitive', value: 75 },
            { name: 'Feeling', value: 80 },
            { name: 'Judging', value: 70 }
        ],
        strengths: [
            'Tolerant',
            'Reliable',
            'Charismatic',
            'Altruistic',
            'Natural leaders'
        ],
        weaknesses: [
            'Overly idealistic',
            'Too selfless',
            'Too sensitive',
            'Fluctuating self-esteem',
            'Struggle to make tough decisions'
        ],
        careerMatches: [
            'Teacher',
            'Sales Representative',
            'HR Manager',
            'Politician',
            'Event Planner',
            'Non-profit Director'
        ],
        relationships: 'ENFJs are dedicated and supportive partners. They put a lot of effort into their relationships and want their partners to be happy. They need a partner who appreciates their care.'
    },
    enfp: {
        id: 'enfp',
        code: 'ENFP',
        name: 'The Campaigner',
        title: 'The Campaigner',
        tagline: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
        image: '/src/assets/characters/enfp.png',
        description: 'Campaigners are true free spirits. They are often the life of the party, but unlike types in the Explorer Role group, Campaigners are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others.',
        color: 'green',
        traits: [
            { name: 'Extraverted', value: 85 },
            { name: 'Intuitive', value: 80 },
            { name: 'Feeling', value: 75 },
            { name: 'Prospecting', value: 85 }
        ],
        strengths: [
            'Curious',
            'Observant',
            'Energetic and enthusiastic',
            'Excellent communicators',
            'Know how to relax'
        ],
        weaknesses: [
            'Poor practical skills',
            'Find it difficult to focus',
            'Overthink things',
            'Get stressed easily',
            'Highly emotional'
        ],
        careerMatches: [
            'Journalist',
            'Actor',
            'Entrepreneur',
            'Consultant',
            'Psychologist',
            'Event Planner'
        ],
        relationships: 'ENFPs are passionate and enthusiastic partners. They love to explore new things with their partners. They need a partner who can handle their energy and spontaneity.'
    },
    istj: {
        id: 'istj',
        code: 'ISTJ',
        name: 'The Logistician',
        title: 'The Logistician',
        tagline: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
        image: '/src/assets/characters/istj.png',
        description: 'Logisticians are practical and fact-minded individuals, whose reliability cannot be doubted. They are dedicated and responsible, and they take pride in their work. They are often seen as the backbone of society, ensuring that everything runs smoothly and efficiently.',
        color: 'blue',
        traits: [
            { name: 'Introverted', value: 80 },
            { name: 'Observant', value: 75 },
            { name: 'Thinking', value: 80 },
            { name: 'Judging', value: 85 }
        ],
        strengths: [
            'Honest and direct',
            'Strong-willed and dutiful',
            'Very responsible',
            'Calm and practical',
            'Create and enforce order'
        ],
        weaknesses: [
            'Stubborn',
            'Insensitive',
            'Always by the book',
            'Judgmental',
            'Often unreasonably blame themselves'
        ],
        careerMatches: [
            'Accountant',
            'Auditor',
            'Data Analyst',
            'Financial Manager',
            'Business Administrator',
            'Judge'
        ],
        relationships: 'ISTJs are loyal and dependable partners. They take their commitments seriously and expect the same from their partners. They need a partner who respects their need for order and stability.'
    },
    isfj: {
        id: 'isfj',
        code: 'ISFJ',
        name: 'The Defender',
        title: 'The Defender',
        tagline: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
        image: '/src/assets/characters/isfj.png',
        description: 'Defenders are very dedicated and warm protectors, always ready to defend their loved ones. They are quiet and reserved, but they have strong social skills and robust relationships. They are reliable and patient, and they work hard to ensure the well-being of those around them.',
        color: 'blue',
        traits: [
            { name: 'Introverted', value: 75 },
            { name: 'Observant', value: 70 },
            { name: 'Feeling', value: 80 },
            { name: 'Judging', value: 75 }
        ],
        strengths: [
            'Supportive',
            'Reliable and patient',
            'Imaginative and observant',
            'Enthusiastic',
            'Loyal and hard-working'
        ],
        weaknesses: [
            'Humble and shy',
            'Take things too personally',
            'Repress their feelings',
            'Overwork themselves',
            'Reluctant to change'
        ],
        careerMatches: [
            'Nurse',
            'Teacher',
            'Social Worker',
            'Administrative Assistant',
            'Customer Service Representative',
            'Librarian'
        ],
        relationships: 'ISFJs are caring and supportive partners. They are dedicated to their partners and want to make them happy. They need a partner who appreciates their kindness and loyalty.'
    },
    estj: {
        id: 'estj',
        code: 'ESTJ',
        name: 'The Executive',
        title: 'The Executive',
        tagline: 'Excellent administrators, unsurpassed at managing things - or people.',
        image: '/src/assets/characters/estj.png',
        description: 'Executives are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the Executive personality type are valued for their clear advice and guidance.',
        color: 'blue',
        traits: [
            { name: 'Extraverted', value: 80 },
            { name: 'Observant', value: 75 },
            { name: 'Thinking', value: 80 },
            { name: 'Judging', value: 85 }
        ],
        strengths: [
            'Dedicated',
            'Strong-willed',
            'Direct and honest',
            'Loyal, patient and reliable',
            'Excellent organizers'
        ],
        weaknesses: [
            'Inflexible and stubborn',
            'Uncomfortable with unconventional situations',
            'Judgmental',
            'Too focused on social status',
            'Difficult to relax'
        ],
        careerMatches: [
            'Manager',
            'Police Officer',
            'Judge',
            'Financial Officer',
            'School Principal',
            'Project Manager'
        ],
        relationships: 'ESTJs are stable and reliable partners. They take their relationships seriously and want to build a secure future. They need a partner who shares their values and respects their authority.'
    },
    esfj: {
        id: 'esfj',
        code: 'ESFJ',
        name: 'The Consul',
        title: 'The Consul',
        tagline: 'Extraordinarily caring, social and popular people, always eager to help.',
        image: '/src/assets/characters/esfj.png',
        description: 'Consuls are the cheerleaders of the personality world. They are social, popular, and always eager to help. They take their responsibilities seriously and want to be appreciated for their efforts. They are often the glue that holds their communities together.',
        color: 'blue',
        traits: [
            { name: 'Extraverted', value: 85 },
            { name: 'Observant', value: 70 },
            { name: 'Feeling', value: 80 },
            { name: 'Judging', value: 75 }
        ],
        strengths: [
            'Strong practical skills',
            'Warm and sensitive',
            'Loyal and dutiful',
            'Good at connecting with others',
            'Good at practical matters'
        ],
        weaknesses: [
            'Worried about their social status',
            'Inflexible',
            'Reluctant to innovate or improvise',
            'Vulnerable to criticism',
            'Often too needy'
        ],
        careerMatches: [
            'Teacher',
            'Nurse',
            'Social Worker',
            'Event Planner',
            'Sales Representative',
            'Office Manager'
        ],
        relationships: 'ESFJs are warm and caring partners. They want to be loved and appreciated. They need a partner who is supportive and affectionate.'
    },
    istp: {
        id: 'istp',
        code: 'ISTP',
        name: 'The Virtuoso',
        title: 'The Virtuoso',
        tagline: 'Bold and practical experimenters, masters of all kinds of tools.',
        image: '/src/assets/characters/istp.png',
        description: 'Virtuosos love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go.',
        color: 'yellow',
        traits: [
            { name: 'Introverted', value: 70 },
            { name: 'Observant', value: 80 },
            { name: 'Thinking', value: 75 },
            { name: 'Prospecting', value: 85 }
        ],
        strengths: [
            'Optimistic and energetic',
            'Creative and practical',
            'Spontaneous and rational',
            'Know how to prioritize',
            'Great in a crisis'
        ],
        weaknesses: [
            'Stubborn',
            'Insensitive',
            'Private and reserved',
            'Easily bored',
            'Dislike commitment'
        ],
        careerMatches: [
            'Mechanic',
            'Engineer',
            'Carpenter',
            'Forensic Scientist',
            'Pilot',
            'Police Officer'
        ],
        relationships: 'ISTPs are independent and adventurous partners. They need their space and freedom. They need a partner who is understanding and willing to give them space.'
    },
    isfp: {
        id: 'isfp',
        code: 'ISFP',
        name: 'The Adventurer',
        title: 'The Adventurer',
        tagline: 'Flexible and charming artists, always ready to explore and experience something new.',
        image: '/src/assets/characters/isfp.png',
        description: 'Adventurers are true artists, but not necessarily in the typical sense where they\'re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it\'s that they use aesthetics, design and even their choices and actions to push the limits of social convention.',
        color: 'yellow',
        traits: [
            { name: 'Introverted', value: 75 },
            { name: 'Observant', value: 70 },
            { name: 'Feeling', value: 85 },
            { name: 'Prospecting', value: 80 }
        ],
        strengths: [
            'Charming',
            'Sensitive to others',
            'Imaginative',
            'Passionate',
            'Curious'
        ],
        weaknesses: [
            'Fiercely independent',
            'Unpredictable',
            'Easily stressed',
            'Overly competitive',
            'Fluctuating self-esteem'
        ],
        careerMatches: [
            'Artist',
            'Musician',
            'Designer',
            'Chef',
            'Veterinarian',
            'Forest Ranger'
        ],
        relationships: 'ISFPs are gentle and caring partners. They are very loyal and devoted to their partners. They need a partner who is patient and understanding.'
    },
    estp: {
        id: 'estp',
        code: 'ESTP',
        name: 'The Entrepreneur',
        title: 'The Entrepreneur',
        tagline: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
        image: '/src/assets/characters/estp.png',
        description: 'Entrepreneurs always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, Entrepreneur personalities love to be the center of attention.',
        color: 'yellow',
        traits: [
            { name: 'Extraverted', value: 85 },
            { name: 'Observant', value: 80 },
            { name: 'Thinking', value: 75 },
            { name: 'Prospecting', value: 90 }
        ],
        strengths: [
            'Bold',
            'Rational and practical',
            'Original',
            'Perceptive',
            'Direct'
        ],
        weaknesses: [
            'Insensitive',
            'Impatient',
            'Risk-prone',
            'Unstructured',
            'May miss the bigger picture'
        ],
        careerMatches: [
            'Entrepreneur',
            'Sales Manager',
            'Paramedic',
            'Police Officer',
            'Stockbroker',
            'Athlete'
        ],
        relationships: 'ESTPs are exciting and adventurous partners. They love to have fun and live in the moment. They need a partner who can keep up with their energy and is willing to try new things.'
    },
    esfp: {
        id: 'esfp',
        code: 'ESFP',
        name: 'The Entertainer',
        title: 'The Entertainer',
        tagline: 'Spontaneous, energetic and enthusiastic people - life is never boring around them.',
        image: '/src/assets/characters/esfp.png',
        description: 'If anyone is to be found spontaneously breaking into song and dance, it is the Entertainer personality type. Entertainers get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as Entertainers when it comes to encouraging others.',
        color: 'yellow',
        traits: [
            { name: 'Extraverted', value: 90 },
            { name: 'Observant', value: 75 },
            { name: 'Feeling', value: 80 },
            { name: 'Prospecting', value: 85 }
        ],
        strengths: [
            'Bold',
            'Original',
            'Aesthetics and showmanship',
            'Practical',
            'Observant'
        ],
        weaknesses: [
            'Sensitive',
            'Conflict-averse',
            'Easily bored',
            'Poor long-term planners',
            'Unfocused'
        ],
        careerMatches: [
            'Actor',
            'Musician',
            'Event Planner',
            'Sales Representative',
            'Tour Guide',
            'Fashion Designer'
        ],
        relationships: 'ESFPs are fun and loving partners. They love to make their partners happy. They need a partner who is affectionate and enjoys socializing.'
    }
};

export const categories = [
    {
        id: 'analysts',
        name: 'Analysts',
        color: 'purple',
        icon: Brain,
        description: 'Rational and quick-witted, Analysts pride themselves on their mental acuity. They are strategic thinkers who excel at solving complex problems.',
        types: [
            { id: 'intj', code: 'INTJ', name: 'The Architect' },
            { id: 'intp', code: 'INTP', name: 'The Logician' },
            { id: 'entj', code: 'ENTJ', name: 'The Commander' },
            { id: 'entp', code: 'ENTP', name: 'The Debater' }
        ]
    },
    {
        id: 'diplomats',
        name: 'Diplomats',
        color: 'green',
        icon: Heart,
        description: 'Empathetic and passionate, Diplomats focus on harmony and cooperation. They are driven by ideals and strive to make the world a better place.',
        types: [
            { id: 'infj', code: 'INFJ', name: 'The Advocate' },
            { id: 'infp', code: 'INFP', name: 'The Mediator' },
            { id: 'enfj', code: 'ENFJ', name: 'The Protagonist' },
            { id: 'enfp', code: 'ENFP', name: 'The Campaigner' }
        ]
    },
    {
        id: 'sentinels',
        name: 'Sentinels',
        color: 'blue',
        icon: Shield,
        description: 'Practical and grounded, Sentinels value stability and order. They are reliable individuals who excel at creating and maintaining systems.',
        types: [
            { id: 'istj', code: 'ISTJ', name: 'The Logistician' },
            { id: 'isfj', code: 'ISFJ', name: 'The Defender' },
            { id: 'estj', code: 'ESTJ', name: 'The Executive' },
            { id: 'esfj', code: 'ESFJ', name: 'The Consul' }
        ]
    },
    {
        id: 'explorers',
        name: 'Explorers',
        color: 'yellow',
        icon: Compass,
        description: 'Spontaneous and adaptable, Explorers embrace the present moment. They are hands-on individuals who love to experiment and take action.',
        types: [
            { id: 'istp', code: 'ISTP', name: 'The Virtuoso' },
            { id: 'isfp', code: 'ISFP', name: 'The Adventurer' },
            { id: 'estp', code: 'ESTP', name: 'The Entrepreneur' },
            { id: 'esfp', code: 'ESFP', name: 'The Entertainer' }
        ]
    }
];
