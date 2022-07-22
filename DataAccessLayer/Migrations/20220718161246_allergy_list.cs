using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    public partial class allergy_list : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "HazelnutAllert",
                table: "soups",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "MilkAllert",
                table: "soups",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "WheatAllert",
                table: "soups",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HazelnutAllert",
                table: "Salads",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "MilkAllert",
                table: "Salads",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "WheatAllert",
                table: "Salads",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HazelnutAllert",
                table: "MainCourses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "MilkAllert",
                table: "MainCourses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "WheatAllert",
                table: "MainCourses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HazelnutAllert",
                table: "HotDrinks",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "MilkAllert",
                table: "HotDrinks",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "WheatAllert",
                table: "HotDrinks",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HazelnutAllert",
                table: "Desserts",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "MilkAllert",
                table: "Desserts",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "WheatAllert",
                table: "Desserts",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HazelnutAllert",
                table: "ColdDrinks",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "MilkAllert",
                table: "ColdDrinks",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "WheatAllert",
                table: "ColdDrinks",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HazelnutAllert",
                table: "soups");

            migrationBuilder.DropColumn(
                name: "MilkAllert",
                table: "soups");

            migrationBuilder.DropColumn(
                name: "WheatAllert",
                table: "soups");

            migrationBuilder.DropColumn(
                name: "HazelnutAllert",
                table: "Salads");

            migrationBuilder.DropColumn(
                name: "MilkAllert",
                table: "Salads");

            migrationBuilder.DropColumn(
                name: "WheatAllert",
                table: "Salads");

            migrationBuilder.DropColumn(
                name: "HazelnutAllert",
                table: "MainCourses");

            migrationBuilder.DropColumn(
                name: "MilkAllert",
                table: "MainCourses");

            migrationBuilder.DropColumn(
                name: "WheatAllert",
                table: "MainCourses");

            migrationBuilder.DropColumn(
                name: "HazelnutAllert",
                table: "HotDrinks");

            migrationBuilder.DropColumn(
                name: "MilkAllert",
                table: "HotDrinks");

            migrationBuilder.DropColumn(
                name: "WheatAllert",
                table: "HotDrinks");

            migrationBuilder.DropColumn(
                name: "HazelnutAllert",
                table: "Desserts");

            migrationBuilder.DropColumn(
                name: "MilkAllert",
                table: "Desserts");

            migrationBuilder.DropColumn(
                name: "WheatAllert",
                table: "Desserts");

            migrationBuilder.DropColumn(
                name: "HazelnutAllert",
                table: "ColdDrinks");

            migrationBuilder.DropColumn(
                name: "MilkAllert",
                table: "ColdDrinks");

            migrationBuilder.DropColumn(
                name: "WheatAllert",
                table: "ColdDrinks");
        }
    }
}
