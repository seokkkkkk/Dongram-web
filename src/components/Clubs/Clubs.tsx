import { customAxios } from "@/Utils/customAxios";
import { useEffect, useState } from "react";

interface ParentProps {
  ids: number[];
  divisions: number[];
}
interface clubinfo {
  clubId: number;
  clubName: string;
  college: string;
  division: string;
  recruitment: string;
}

export const Clubs = ({ ids, divisions }: ParentProps) => {
  const [clubData, setClubData] = useState<clubinfo[]>([]);
  useEffect(() => {
    if (ids.length > 0) {
      const collegeIds = ids.join(",");
      customAxios
        .get(`clubs?collegeIds=${collegeIds}`)
        .then((response) => {
          setClubData(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.error("에러: ", error);
        });
    } else {
      customAxios
        .get(`clubs/all`)
        .then((response) => {
          setClubData(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.error("에러: ", error);
        });
    }
  }, [ids]);
  return null;
};
