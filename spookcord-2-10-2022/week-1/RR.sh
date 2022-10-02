#!/usr/bin/bash

# Russian Roulette game in Bash script
# Game Spookcord Hackathon Week 1
# Author: Pratik
# Discord: Pratik#6965

# Colors
BLUE="\e[34m";
RED="\e[31m";
GREEN="\e[32m";
YELLOW="\e[33m";
BACKGOUND="\e[44m"
BOLDRED="\e[1;31m"
UNDERLINEDBLUE="\e[4;34m";
BOLD="\e[1m"
NOCOLOR="\e[0m";

clear

function welcome {
  echo -e "${RED}=========================${NOCOLOR}"
  echo -e "${RED}|| ${BOLDRED}Russian Roulette 🔫${RED} ||${NOCOLOR}"
  echo -e "${RED}=========================${NOCOLOR}\n\n"
  echo -e "${BLUE}======================================================================${NOCOLOR}\n"
  echo -e "${RED}! PLAY IT AT YOUR OWN RISK !${NOCOLOR}"
  echo -e "${BOLDRED}PLEASE AVOID PLAYING WITH IMPORTANT FILES! Make a dummy file and use that in game!${NOCOLOR}\n"
}

function get_file {
  echo -e "${RED}! PLAY IT AT YOUR OWN RISK !${NOCOLOR}"
  echo -e "${BOLDRED}PLEASE AVOID PLAYING WITH IMPORTANT FILES IT WILL BE DELETED WHEN YOU HIT THE FILE! Make a dummy file and use that in game!${NOCOLOR}\n"
  echo -n -e "${YELLOW}Enter the file name to kill${NOCOLOR}: "
  read -r file_name
  echo -e "\n"
}

function check_file {
  if [[ -f $file_name ]]; then
    echo -e "${GREEN}${file_name} Loaded! Starting game...${NOCOLOR}"
    sleep 2
    clear
  else
    echo -e "${RED}${file_name} Doesn't exists!${NOCOLOR}"
    exit 1
  fi
}

function game {
  echo -e "${BOLD}Welcome to the world's most${NOCOLOR} ${BOLDRED}DANGEROUS${NOCOLOR} ${BOLD}game${NOCOLOR}...\n\n"
  sleep 1

  echo -e "Loading ${RED}Bullets${NOCOLOR}..."
  BULLETS=$(( $RANDOM % 6 + 1 ))
  CYLINDER=$(( $RANDOM % 6 + 1 ))
  sleep 2

  echo -e "Making the ${RED}Gun${NOCOLOR} ready... Done!\n"
  sleep 2

  BANG=0

  while [[ $BANG -lt 1 ]]; do
    echo -e "Press any key to ${RED}FIRE${NOCOLOR} or ${YELLOW}CTRL-C${NOCOLOR} to exit game.\n"
    read -sn 1
    sleep 2

    if [[ $BULLETS -eq $CYLINDER ]]; then
      echo -e "Bullet is in chamber...\n"
      sleep 2
      echo -e "${BOLD}BANG!${NOCOLOR}\n"
      sleep 2
      echo -e "${GREEN}Oh... Looks like${NOCOLOR} ${UNDERLINEDBLUE}${file_name}${NOCOLOR} ${GREEN}is${NOCOLOR} ${BOLDRED}D E A D${NOCOLOR}\n\n"
      sleep 1
      echo -e "Run the file again to restart game!\n\n"

      BANG=$(( $BANG + 1 ))
      rm -rf "${file_name}"
    else
      echo -e "Bullet is in chamber...\n"
      sleep 1
      echo -e "Uh oh... You missed it! ${UNDERLINEDBLUE}${file_name}${NOCOLOR} is still alive!\n"
      echo -e "${RED}Gun${NOCOLOR} is ready again!\n"
      sleep 1
      echo -e "${BACKGOUND}================================================${NOCOLOR}\n\n"
      sleep 1
    fi

    CYLINDER=$(( ( $CYLINDER % 6 + 1 ) + 1 ))
  done

  echo -e "${BOLD}Thanks for Playing!\nIm new in bash so Feel free to DM me on Discord ${YELLOW}Pratik#6965${NOCOLOR} ${BOLD}For suggestions!${NOCOLOR}"
}

get_file
check_file
welcome
game
