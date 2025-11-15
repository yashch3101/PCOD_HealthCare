"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import ExerciseVideoDemo from "@/components/ExerciseVideoDemo"

const AVAILABLE_EXERCISES = [
  {
    id: "yoga-flow",
    name: "Yoga Flow",
    duration: "20 minutes",
    image: "https://www.hoshyoga.org/wp-content/uploads/2022/05/10-Things-You-Need-To-Know-About-Vinyasa-Flow.jpg",
    video: "/videos/yoga-flow.mp4"
  },
  {
    id: "hiit-cardio",
    name: "HIIT Cardio",
    duration: "15 minutes",
    image: "https://www.nourishmovelove.com/wp-content/uploads/2020/06/HIITCardio2V4.jpg",
    video: "/videos/hiit-cardio.mp4"
  },
  {
    id: "strength-training",
    name: "Strength Training",
    duration: "30 minutes",
    image: "https://tse3.mm.bing.net/th/id/OIP.UaEdeU-WXMth6jrhuikawAAAAA?w=350&h=205&rs=1&pid=ImgDetMain&o=7&rm=3",
    video: "/videos/strength-training.mp4"
  },
  {
    id: "pilates",
    name: "Pilates",
    duration: "25 minutes",
    image: "https://www.verywellfit.com/thmb/fgSNaPd8_EOoNUl1N6t4GRVC3BI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/82301405-56b35cc13df78cdfa004c35a.jpg",
    video: "/videos/hiit-cardio.mp4"
  },
  {
    id: "stretching",
    name: "Stretching",
    duration: "10 minutes",
    image: "https://tse1.mm.bing.net/th/id/OIP.V5g4b1hW2_PaOaruXbapxAHaD4?w=1200&h=630&rs=1&pid=ImgDetMain&o=7&rm=3",
    video: "/videos/yoga-flow.mp4"
  },
]

export function ExerciseList({ onSelectExercise }) {
  const [selectedExercises, setSelectedExercises] = useState({})
  const [selectedExerciseForDemo, setSelectedExerciseForDemo] = useState(null)

  const toggleExerciseSelection = (id) => {
    setSelectedExercises((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleConfirm = () => {
    Object.entries(selectedExercises).forEach(([id, isSelected]) => {
      if (isSelected) {
        const exercise = AVAILABLE_EXERCISES.find((ex) => ex.id === id)
        if (exercise) {
          onSelectExercise({ ...exercise, completed: false })
        }
      }
    })
    setSelectedExercises({})
  }

  const hasSelections = Object.values(selectedExercises).some(Boolean)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 py-4">
        {AVAILABLE_EXERCISES.map((exercise) => (
          <div key={exercise.id} className="flex items-center justify-between border rounded-lg p-4">
            <div className="flex items-center gap-4">
              <Checkbox
                id={`select-${exercise.id}`}
                checked={!!selectedExercises[exercise.id]}
                onCheckedChange={() => toggleExerciseSelection(exercise.id)}
                className="mr-2"
              />
              <img
                src={exercise.image || "/placeholder.svg"}
                alt={exercise.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <label htmlFor={`select-${exercise.id}`} className="font-medium cursor-pointer">
                  {exercise.name}
                </label>
                <p className="text-sm text-gray-500">{exercise.duration}</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-sm"
              onClick={() => setSelectedExerciseForDemo(exercise)}
            >
              View Demo
            </Button>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-4 border-t">
        <Button onClick={handleConfirm} disabled={!hasSelections} className="bg-purple-600 hover:bg-purple-700">
          Confirm Selection
        </Button>
      </div>

      {selectedExerciseForDemo && (
        <ExerciseVideoDemo
          videoSrc={selectedExerciseForDemo.video}
          onClose={() => setSelectedExerciseForDemo(null)}
        />
      )}
    </div>
  )
}