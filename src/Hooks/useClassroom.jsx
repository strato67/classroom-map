import { useState } from "react";

export default function useClassroom() {
  const [error, setError] = useState(null);

  const getClassMap = async (classroomName) => {

    try {
      const response = await fetch(
        `/api/professorUtilities/classList/${classroomName}`
      );

      const data = await response.json();

      if (!response.ok) {
        setError(true);
        return {};
      }

      setError(false);
      return data;
    } catch (e) {
      setError(true);
      return {};
    }

  };

  return { getClassMap, error };
}
