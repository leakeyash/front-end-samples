FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY Angular6Core/Angular6Core.csproj Angular6Core/
RUN dotnet restore Angular6Core/Angular6Core.csproj
COPY . .
WORKDIR /src/Angular6Core
RUN dotnet build Angular6Core.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Angular6Core.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Angular6Core.dll"]
