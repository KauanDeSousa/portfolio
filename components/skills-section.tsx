"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Lightbulb, Clock, Target, MessageSquare } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SkillsSection() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      titleKey: "problemSolving",
      descriptionKey: "problemSolvingDesc",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      titleKey: "teamCollaboration",
      descriptionKey: "teamCollaborationDesc",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      titleKey: "creativeThinking",
      descriptionKey: "creativeThinkingDesc",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      titleKey: "timeManagement",
      descriptionKey: "timeManagementDesc",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      titleKey: "attentionToDetail",
      descriptionKey: "attentionToDetailDesc",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      titleKey: "communication",
      descriptionKey: "communicationDesc",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-2">{t("softSkillsTitle")}</h2>
      <p className="text-muted-foreground mb-10">{t("softSkillsSubtitle")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{t(skill.titleKey)}</h3>
                <p className="text-muted-foreground">{t(skill.descriptionKey)}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
