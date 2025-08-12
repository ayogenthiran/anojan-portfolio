import React from "react"
import { MapPin, Calendar } from "lucide-react" // Removed TrendingUp import
import { experienceData } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ExperienceSectionProps {
  className?: string
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className }) => {
  // Debug function to test logo loading
  const testLogoLoading = () => {
    const logos = ['/hehealth.png', '/senzmate.png', '/kaidu.png', '/uwo.png'];
    logos.forEach(logo => {
      const img = new Image();
      img.onload = () => console.log(`✅ Logo loaded successfully: ${logo}`);
      img.onerror = () => console.error(`❌ Failed to load logo: ${logo}`);
      img.src = logo;
    });
  };

  // Test logos on component mount
  React.useEffect(() => {
    testLogoLoading();
  }, []);

  return (
    <div className={cn("text-foreground", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 text-center">Work Experience</h2>
      {/* Removed the descriptive paragraph below */}

      <div className="space-y-12">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-0">{exp.title}</h3>
                  {/* Removed tag rendering */}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    {exp.logo ? (
                      <div className="relative">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-16 h-16 rounded-lg object-contain bg-white/10 border-2 border-white/20 p-2 shadow-lg hover:scale-105 transition-transform duration-200"
                          onError={(e) => {
                            console.error(`Failed to load logo for ${exp.company}:`, exp.logo);
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            // Show fallback when image fails
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-16 h-16 rounded-lg bg-white/10 border-2 border-white/20 p-2 shadow-lg flex items-center justify-center">
                                  <span class="text-white/50 text-xs font-medium">${exp.company.charAt(0)}</span>
                                </div>
                              `;
                            }
                          }}
                          onLoad={() => {
                            console.log(`Successfully loaded logo for ${exp.company}:`, exp.logo);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-white/10 border-2 border-white/20 p-2 shadow-lg flex items-center justify-center">
                        <span className="text-white/50 text-xs font-medium">{exp.company.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-semibold text-[#00A79D]">{exp.company}</h4>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.dates}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {exp.description.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#00A79D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            {/* Divider line between experiences (except for the last one) */}
            {index < experienceData.length - 1 && <div className="mt-12 border-b border-gray-800"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection
