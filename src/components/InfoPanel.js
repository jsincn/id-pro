import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class InfoPanel extends React.Component {


  render() {
    return (<div><Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Über die Studie</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <diV style={{ marginTop: 10 }}>
            Liebe Studierende,
          </diV>
          <div style={{ marginTop: 10 }}>
            vielen Dank, dass sich an meiner Forschungsarbeit zum Thema „Lernen im Flow“ beteiligen. Im Rahmen einer Längsschnittanalyse wird ermittelt, welche Faktoren Einfluss auf Flow-Erleben beim Lernen haben und inwiefern dadurch die Übungszeiten und der Spaß am Lernen auch in einem Fach wie Mathematik erhöht werden kann. Längsschnittanalyse heißt in diesem Fall, dass ich Sie gerne zu verschiedenen Zeitpunkten befragen möchte. Der erste Fragebogen ist etwas umfangreicher und dauert in der Bearbeitung etwa 15 Minuten, alle weiteren Befragungen sind deutlich kürzer und dauern maximal 5 Minuten in der Bearbeitung.
          </div>
          <div style={{ marginTop: 10 }}>
            Damit die Ergebnisse Anonym immer einer Person zuzuordnen sind, müssen Sie mit dieser E-Mail einen ID-Code beantragen. Bitte bewahren Sie diesen 4-stelligen Zahlencode (Zahl zwischen 1000 und 9999) gut auf, er muss auf allen Fragebögen und auch beim Üben und beim MGT in bettermarks eingegeben werden.
          </div>
          <div style={{ marginTop: 10 }}>
            Die ersten beiden Messzeitpunkte sind heute bei der Einführungsveranstaltung, ich möchte Sie bitten, dass Sie diesen Fragebogen jetzt beantworten. Danach haben Sie die Gelegenheit, bettermark auszuprobieren, während der Zeit stehe ich Ihnen für Fragen gerne zur Verfügung. Nach dem ersten Üben bekommen Sie einen Link zu einem Kurzfragebogen, dieser Fragebogen, soll möglichst immer nach dem Üben kurz ausgefüllt werden. Für meine Studie wäre es wichtig, dass Sie diesen immer direkt nach dem Üben ausfüllen, sollten Sie es mal vergessen ist das kein Problem, insgesamt benötige ich pro Teilnehmer aber min. 3 im Anschluss an das Üben beantwortete Kurzfragebögen, der Link zum Fragebogen findet sich in Ilias. Ein letzter Fragebogen kommt dann nach der Prüfung. Wichtig: Bitte geben Sie auf allen Fragebögen Ihren ID-Code an, damit ich die Fragebögen anonym zuordnen kann.
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Zur Person</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Als Mitarbeiterin des E-Learning und E-Assessment Team bin ich zuständig für die Organisation und Durchführung des Mathematik-Grundlagen-Tests an der Hochschule Heilbronn. Im Rahmen meiner Promotion führe ich in diesem Semester mit den Kursteilnehmern eine Längsschnittanalyse zum Thema „Lernen im Flow“ durch. Bei Fragen zur Studie stehe ich Ihnen gerne unter der E-Mail-Adresse <Link href="mailto:kerstin.steimle@hs-heilbronn.de">kerstin.steimle@hs-heilbronn.de</Link> zur Verfügung.
              </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Infos zur Verlosung</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ihr ID-Code ist auch der Glückscode für die Verlosung von zwei Freikarten, die mir vom Erlebnispark Tripsdrill freundlicherweise zur Verfügung gestellt wurden.

            Diese beiden Tickets werden unter all den Teilnehmern verlost, die an sämtlichen Befragungen der Längsschnittanalyse teilgenommen haben.

            Der Gewinn-ID-Code wird im Mathe-Grundlagen-Kurs in Ilias veröffentlicht. Nachweis ist die E-Mail mit dem ID-Code, die sie vom System erhalten haben.


              </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Datenschutz</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Die für die Erstellung des Codes von Ihnen angegebene E-Mail-Adresse wird von mir nicht gespeichert und kann aufgrund einer kryptografischen Verschlüsselung von mir nicht rückverfolgt werden. Diese Verschlüsselung ermöglicht es allerdings mit der gleichen E-Mail-Adresse den ID-Code erneut abzufragen. Bitte archivieren Sie die E-Mail mit Ihrem ID-Code dennoch sorgfältig, damit Sie bei allen Befragungen und beim Üben in Bettermarks, sowie im Anschluss an den Mathe-Grundlagen-Test einfach darauf zugreifen können.

            Mit der Anforderung des ID-Codes stimmen Sie zu, dass die in der Studie von Ihnen gemachten Angaben und persönlichen Daten in anonymisierter Form für die genannten Forschungszwecke verwendet werden dürfen.

            Bei Fragen wenden Sie sich bitte per E-Mail an kerstin.steimle@hs-heilbronn.de

              </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Kontakt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Inhaltliche Verantwortung:</b>
            <div>
              Dipl.-Kffr. Kerstin Steimle
              </div><div>
              Telefon: +49 7131 504 6735
              </div><div>
              E-Mail: <Link href="mailto:kerstin.steimle@hs-heilbronn.de">kerstin.steimle@hs-heilbronn.de</Link>
              </div><div>
              Büroadresse: G212 Campus Sontheim
              </div><div>
              Postadresse: Max-Planck-Str. 39, 74081 Heilbronn
            </div>
            <div>
              <b>Technische Realisierung:</b>
            </div>
            <div><Link href="mailto:support@stei.ml">support@stei.ml</Link></div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>);
  }

}