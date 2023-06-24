export const getTeamNames = (fixture) => {
  const teamNames = fixture.map((teams) => {
    return {
      local: teams.name.split("vs")[0].trim(),
      visitor: teams.name.split("vs")[1].trim(),
    };
  });
  return teamNames;
};
