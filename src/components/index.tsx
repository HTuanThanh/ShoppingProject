getListAthleteSubcribed: builder.query<any[], ITakeAthlete>({
    query: (data) => ({
      url: `/dashboard/list-athlete-subcribed`,
      method: "GET",
      data,
    }),
  }),
  getListAthleteRecommended: builder.query<any[], ITakeAthlete>({
    query: (data) => ({
      url: `/dashboard/list-athlete-recommended`,
      method: "GET",
      data,
    }),
  }),
//ádasdasd

  const MyAtheletes: FC = () => {
    const [Recommended, setRecommended] = useState(3);
  
    const ListAthleteSubcribed = useGetListAthleteSubcribedQuery({
      take: 3,
    });
    const ListAthleteRecommended = useGetListAthleteRecommendedQuery({
      take: Recommended,
    });
    console.log(ListAthleteRecommended);
    useEffect(() => {
      if (ListAthleteSubcribed.data !== undefined) {
        setRecommended(2);
      } else {
        setRecommended(3);
      }
    });



    {ListAthleteSubcribed.data &&
        ListAthleteSubcribed.data.map(
          ({ subscribedAvatar, subscribedName }, index: number) => (
            <GridItem key={`${"item" + index}`}>
              <AthleteAvatar
                imageUrl={subscribedAvatar}
                name={subscribedName}
                isRecommend={false}
              />
            </GridItem>
          )
        )}
    </Grid>
    < templateColumns="repeat(3, 1fr)" columnGap={4} rowGap={5}>
      {ListAthleteRecommended.data &&
        ListAthleteRecommended.data.map((recommended: any) => (
          <GridItem key={`${"item" + recommended.user_id}`}>
            <AthleteAvatar
              imageUrl={recommended.avatar}
              name={recommended.full_name}
              isRecommend={true}
            />
          </GridItem>
        ))}

//123213132
export interface ITakeAthlete {
    take: number;
  }
  