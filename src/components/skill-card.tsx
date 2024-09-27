"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type SkillCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function SkillCard({
  title,
  description,
  icon,
}: SkillCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-0.5">
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-mono">{description}</p>
      </CardContent>
    </Card>
  );
}
