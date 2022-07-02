using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    public partial class mig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SoupName",
                table: "soups",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SaladName",
                table: "Salads",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MainCourseName",
                table: "MainCourses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HotDrinkName",
                table: "HotDrinks",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DessertName",
                table: "Desserts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ColdDrinkName",
                table: "ColdDrinks",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SoupName",
                table: "soups");

            migrationBuilder.DropColumn(
                name: "SaladName",
                table: "Salads");

            migrationBuilder.DropColumn(
                name: "MainCourseName",
                table: "MainCourses");

            migrationBuilder.DropColumn(
                name: "HotDrinkName",
                table: "HotDrinks");

            migrationBuilder.DropColumn(
                name: "DessertName",
                table: "Desserts");

            migrationBuilder.DropColumn(
                name: "ColdDrinkName",
                table: "ColdDrinks");
        }
    }
}
