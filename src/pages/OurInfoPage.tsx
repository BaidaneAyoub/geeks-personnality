import { Linkedin, Github, Mail, Users } from 'lucide-react';

export function OurInfoPage() {
  const contacts = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with us',
      link: 'https://linkedin.com',
      color: 'blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View our projects',
      link: 'https://github.com',
      color: 'gray'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@geekspersonality.com',
      link: 'mailto:contact@geekspersonality.com',
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-6">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're here to help you discover your personality. 
          Reach out to us through any of the channels below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          const colorClass = colorClasses[contact.color as keyof typeof colorClasses];
          
          return (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-all group"
            >
              <div className={`w-14 h-14 ${colorClass} rounded-2xl flex items-center justify-center mb-4 transition-colors`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">
                {contact.label}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {contact.value}
              </p>
            </a>
          );
        })}
      </div>

      {/* About Section */}
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
        <h2 className="text-3xl text-gray-900 mb-6 text-center">
          About Geeks Personality
        </h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            Geeks Personality is a comprehensive personality assessment platform designed to help 
            individuals understand their unique traits, strengths, and potential. Our test is based 
            on established psychological frameworks and provides detailed insights into your personality type.
          </p>
          <p>
            Whether you're exploring career options, seeking personal growth, or simply curious about 
            what makes you tick, our platform offers valuable insights and actionable recommendations 
            tailored to your personality type.
          </p>
          <p>
            We believe that self-awareness is the first step towards personal and professional success. 
            By understanding your personality, you can make better decisions, build stronger relationships, 
            and unlock your full potential.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl text-gray-900 mb-4">
          Built with ❤️ by personality enthusiasts
        </h2>
        <p className="text-gray-600 mb-6">
          Our team is passionate about helping people discover their true selves through 
          scientifically-backed personality assessments.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors shadow-sm"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
          >
            <Github className="w-5 h-5 text-gray-700" />
          </a>
          <a
            href="mailto:contact@geekspersonality.com"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors shadow-sm"
          >
            <Mail className="w-5 h-5 text-purple-600" />
          </a>
        </div>
      </div>
    </div>
  );
}
