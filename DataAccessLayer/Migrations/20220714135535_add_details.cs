using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    public partial class add_details : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SoupDetails",
                table: "soups",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SaladDetails",
                table: "Salads",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MainCourseDetails",
                table: "MainCourses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HotDrinkDetails",
                table: "HotDrinks",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DessertDetails",
                table: "Desserts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ColdDrinkDetails",
                table: "ColdDrinks",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SoupDetails",
                table: "soups");

            migrationBuilder.DropColumn(
                name: "SaladDetails",
                table: "Salads");

            migrationBuilder.DropColumn(
                name: "MainCourseDetails",
                table: "MainCourses");

            migrationBuilder.DropColumn(
                name: "HotDrinkDetails",
                table: "HotDrinks");

            migrationBuilder.DropColumn(
                name: "DessertDetails",
                table: "Desserts");

            migrationBuilder.DropColumn(
                name: "ColdDrinkDetails",
                table: "ColdDrinks");
        }
    }
}
