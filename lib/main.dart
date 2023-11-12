import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Messed up',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const Test(),
    );
  }
}

class Test extends StatefulWidget {
  const Test({super.key});

  @override
  State<Test> createState() => _TestState();
}

class _TestState extends State<Test> {

  final testMark = {
    'id': 'ETS1683/14',
    'Name': 'Yihun Alemayehu',
    'Section': 'E',
    'Dept': 'SWEG',
  };

  String siri (String name) {
    return testMark['$name']!;
  }

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(testMark['Name']!),
            Text(siri('id')),
            Text(siri('Section')),
          ],
        ),
      )
    );
  }
}